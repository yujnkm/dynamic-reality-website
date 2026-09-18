/* 
  shows a popup of text on hover/focus of any element with the data-tooltip
  attribute.
*/

{
  // let keyboard users dismiss a tooltip without moving focus (WCAG 1.4.13)
  const hideOnEsc = {
    name: "hideOnEsc",
    defaultValue: true,
    fn: ({ hide }) => {
      const onKeyDown = (event) => {
        if (event.key === "Escape") hide();
      };
      return {
        onShow: () => document.addEventListener("keydown", onKeyDown),
        onHide: () => document.removeEventListener("keydown", onKeyDown),
      };
    },
  };

  const onLoad = () => {
    // make sure Tippy library available
    if (typeof tippy === "undefined") return;

    // get elements with non-empty tooltips
    const elements = [...document.querySelectorAll("[data-tooltip]")].filter(
      (element) => element.dataset.tooltip.trim() && !element._tippy
    );

    // add tooltip to elements
    tippy(elements, {
      content: (element) => element.dataset.tooltip.trim(),
      delay: [200, 0],
      offset: [0, 20],
      allowHTML: true,
      interactive: true,
      appendTo: () => document.body,
      plugins: [hideOnEsc],
      aria: {
        content: "describedby",
        expanded: null,
      },
      onShow: ({ reference, popper }) => {
        const dark = reference.closest("[data-dark]")?.dataset.dark;
        if (dark === "false") popper.dataset.dark = true;
        if (dark === "true") popper.dataset.dark = false;
      },
      // onHide: () => false, // debug
    });
  };

  // after page loads
  window.addEventListener("load", onLoad);
  // after tags load
  window.addEventListener("tagsfetched", onLoad);
}
