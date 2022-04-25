import "./style.css";
import "./scss/style.scss";
import "./js/scroll";
import "./js/modal";

// Polyfill for browsers with no Scroll-Timeline support

// Fallback for browsers that don't support CSS ScrollTimeline
if (!CSS.supports("animation-timeline: foo")) {
  // Replace warning box with info bo

  // As we're about to shift content out of .columns, we need it to hide its overflow
  document.querySelector(".columns").style.overflowY = "hidden";

  // Set up timeline
  const timeline = new ScrollTimeline({
    scrollSource: document.documentElement,
    timeRange: 1,
    fill: "both",
  });

  // Loop all eligible columns
  document.querySelectorAll(".column-reverse").forEach(($column) => {
    // Flip item order in reverse columns
    $column.style.flexDirection = "column-reverse";

    // Hook Animation
    $column.animate(
      {
        transform: [
          "translateY(calc(-100% + 100vh))",
          "translateY(calc(100% - 100vh))",
        ],
      },
      {
        duration: 1,
        fill: "both",
        timeline,
      }
    );
  });
}
console.log("Hola");
