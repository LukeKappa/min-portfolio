// Custom search-fuse.js with Ctrl+K / Cmd+K toggle and Escape to close
let searchSetup = false;
let fuse;

async function initIndex() {
	if (searchSetup) return;

	const searchIndexElem = document.getElementById("search-index");
	if (!searchIndexElem) return;
	const url = searchIndexElem.textContent;
	const response = await fetch(url);

	if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

	const options = {
		includeScore: false,
		includeMatches: true,
		ignoreLocation: true,
		threshold: 0.15,
		keys: [
			{ name: "title", weight: 3 },
			{ name: "description", weight: 2 },
			{ name: "body", weight: 1 }
		]
	};

	fuse = new Fuse(await response.json(), options);
	searchSetup = true;
}

function openSearch() {
	initIndex();
	const searchBar = document.getElementById("search-bar");
	const searchContainer = document.getElementById("search-container");
	if (searchContainer) {
		searchContainer.classList.add("active");
		if (searchBar) {
			searchBar.removeAttribute("disabled");
			searchBar.focus();
			searchBar.select();
		}
	}
}

function closeSearch() {
	const searchBar = document.getElementById("search-bar");
	const searchContainer = document.getElementById("search-container");
	const searchResults = document.getElementById("search-results");
	if (searchContainer && searchContainer.classList.contains("active")) {
		searchContainer.classList.remove("active");
		if (searchBar) {
			searchBar.setAttribute("disabled", "");
			searchBar.blur();
		}
		if (searchResults) {
			searchResults.style.display = "none";
		}
	}
}

function toggleSearch() {
	const searchContainer = document.getElementById("search-container");
	if (searchContainer && searchContainer.classList.contains("active")) {
		closeSearch();
	} else {
		openSearch();
	}
}

function debounce(actual_fn, wait) {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			actual_fn(...args);
		}, wait);
	};
}

function initSearch() {
	const searchBar = document.getElementById("search-bar");
	const searchResults = document.getElementById("search-results");
	const searchContainer = document.getElementById("search-container");
	const searchToggle = document.getElementById("search-toggle");
	const shortcutBadge = document.getElementById("search-shortcut-badge");

	// Display Mac command key ⌘K if on Apple platform
	if (shortcutBadge && /Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgent || "")) {
		shortcutBadge.textContent = "⌘K";
	}

	const MAX_ITEMS = 10;
	const MAX_RESULTS = 4;

	if (searchBar && searchResults) {
		searchBar.addEventListener("keyup", (e) => {
			if (e.key === "Escape") return;
			const searchVal = searchBar.value.trim();
			if (!searchVal) {
				searchResults.innerHTML = "";
				searchResults.style.display = "none";
				return;
			}
			if (!fuse) return;
			const results = fuse.search(searchVal, { limit: MAX_ITEMS });

			let html = "";
			for (const result of results) {
				html += makeTeaser(result, searchVal);
			}
			searchResults.innerHTML = html;

			if (html) {
				searchResults.style.display = "flex";
			} else {
				searchResults.style.display = "none";
			}
		});
	}

	function makeTeaser(result, searchVal) {
		const TEASER_SIZE = 20;
		let output = `<div class="search-result item"><a class="result-title" href="${result.item.url}">${result.item.title}</a>`;

		if (result.matches) {
			for (const match of result.matches) {
				if (match.key === "title") continue;

				const indices = match.indices.sort((a, b) => Math.abs(a[1] - a[0] - searchVal.length) - Math.abs(b[1] - b[0] - searchVal.length)).slice(0, MAX_RESULTS);
				const value = match.value;

				for (const ind of indices) {
					const start = Math.max(0, ind[0] - TEASER_SIZE);
					const end = Math.min(value.length - 1, ind[1] + TEASER_SIZE);
					output += "<span>"
						+ value.substring(start, ind[0])
						+ `<strong>${value.substring(ind[0], ind[1] + 1)}</strong>`
						+ value.substring(ind[1] + 1, end)
						+ "</span>";
				}

				if (match.indices.length > 4) {
					const moreMatchesElem = document.getElementById("more-matches-text");
					const moreMatchesText = moreMatchesElem ? moreMatchesElem.textContent : "+$MATCHES more";
					output += `<span class="more-matches">${moreMatchesText}</span>`.replace("$MATCHES", `+${match.indices.length - MAX_RESULTS}`);
				}
			}
		}
		return output + "</div>";
	}

	// Keyboard controls: Ctrl+K / Cmd+K to toggle, Escape to close
	document.addEventListener("keydown", function(event) {
		const isCtrlOrCmdK = (event.ctrlKey || event.metaKey) && (event.key === "k" || event.key === "K");
		if (isCtrlOrCmdK) {
			event.preventDefault();
			toggleSearch();
			return;
		}

		if (event.key === "Escape") {
			if (searchContainer && searchContainer.classList.contains("active")) {
				event.preventDefault();
				closeSearch();
			}
		}
	});

	if (searchToggle) {
		searchToggle.addEventListener("click", toggleSearch);
	}
}

if (document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)) {
	initSearch();
} else {
	document.addEventListener("DOMContentLoaded", initSearch);
}
