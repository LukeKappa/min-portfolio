// 3D Revolving ASCII Donut Animation for CRT Monitor
// Based on Andy Sloane's donut.c mathematical projection algorithm
(function () {
  function startDonut() {
    const el = document.querySelector(".crt pre code") || document.querySelector(".crt pre");
    if (!el) return;

    // Respect user's motion preferences
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let A = 0;
    let B = 0;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    // Responsive dimensions
    function getDims() {
      const isMobile = window.innerWidth <= 480;
      return isMobile
        ? { w: 38, h: 16, r1: 18, r2: 9 }
        : { w: 52, h: 20, r1: 27, r2: 13 };
    }

    function render(time) {
      requestAnimationFrame(render);
      if (time - lastTime < interval) return;
      lastTime = time;

      const { w, h, r1, r2 } = getDims();
      const b = [];
      const z = [];
      A += 0.045;
      B += 0.025;
      const cA = Math.cos(A), sA = Math.sin(A);
      const cB = Math.cos(B), sB = Math.sin(B);

      for (let k = 0; k < w * h; k++) {
        b[k] = " ";
        z[k] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j), st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i), cp = Math.cos(i);
          const h_dist = ct + 2;
          const D = 1 / (sp * h_dist * sA + st * cA + 5);
          const t = sp * h_dist * cA - st * sA;

          const x = 0 | (w / 2 + r1 * D * (cp * h_dist * cB - t * sB));
          const y = 0 | (h / 2 + r2 * D * (cp * h_dist * sB + t * cB));
          const o = x + w * y;
          const N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

          if (h > y && y >= 0 && x >= 0 && w > x && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }

      let output = "";
      for (let k = 0; k < w * h; k++) {
        output += k % w === w - 1 ? "\n" : b[k];
      }
      el.textContent = output;
    }

    requestAnimationFrame(render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startDonut);
  } else {
    startDonut();
  }
})();
