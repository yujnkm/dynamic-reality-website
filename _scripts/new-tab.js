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
    }
  };

  // as soon as the html is parsed, so links are set before images finish
  window.addEventListener("DOMContentLoaded", onLoad);
}
