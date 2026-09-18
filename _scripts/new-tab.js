/*
  open every link that leaves the site in a new tab.
*/

{
  const onLoad = () => {
    for (const link of document.querySelectorAll("a[href]")) {
      // skip mailto:, tel:, etc., which would just leave a blank tab behind
      if (!link.protocol.startsWith("http")) continue;
      if (link.hostname === window.location.hostname) continue;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // tell screen reader users the link opens a new tab. an aria-label
      // replaces the link's text, so add the note there when there is one
      const note = "(opens in new tab)";
      const label = link.getAttribute("aria-label");
      if (label) link.setAttribute("aria-label", `${label} ${note}`);
      else if (link.getAttribute("aria-hidden") !== "true") {
        const span = document.createElement("span");
        span.className = "sr-only";
        span.textContent = ` ${note}`;
        link.append(span);
      }
    }
  };

  // as soon as the html is parsed, so links are set before images finish
  window.addEventListener("DOMContentLoaded", onLoad);
}
