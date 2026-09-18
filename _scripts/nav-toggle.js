/*
  opens/closes the collapsed nav menu on narrow screens, and closes it on
  escape.
*/

{
  const onLoad = () => {
    const toggle = document.querySelector(".nav-toggle");
    if (!toggle) return;

    const setOpen = (open) =>
      toggle.setAttribute("aria-expanded", open ? "true" : "false");

    toggle.addEventListener("click", () =>
      setOpen(toggle.getAttribute("aria-expanded") !== "true")
    );

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      setOpen(false);
      toggle.focus();
    });
  };

  // as soon as the html is parsed, so the menu works before images finish
  window.addEventListener("DOMContentLoaded", onLoad);
}
