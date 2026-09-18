/*
  makes tag links on the research page toggle filters in place instead of
  replacing the whole search. clicking a tag adds it to the current query (so
  tags narrow the results together), clicking an active tag removes it. free
  text typed in the search box is kept.
*/
{
  // current query, from the search box
  const getQuery = () =>
    document.querySelector(".search-box input")?.value || "";

  // add or remove one tag from a query string
  const toggleTag = (query, tag) => {
    const parts = query.match(/"[^"]*"|\S+/g) || [];
    const isTag = (part) => {
      const match = part.match(/^"\s*tag:\s*(.*)"$/);
      return match && normalizeTag(match[1]) === tag;
    };
    const kept = parts.filter((part) => !isTag(part));
    if (kept.length === parts.length) kept.push(`"tag: ${tag}"`);
    return kept.join(" ");
  };

  window.addEventListener("click", (event) => {
    const link = event.target.closest(".pub-filters .tag, .publication .tag");
    // only on pages with a search box, and leave modified clicks alone
    if (!link || !window.searchFor || !document.querySelector(".search-box"))
      return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button)
      return;
    event.preventDefault();

    window.searchFor(toggleTag(getQuery(), normalizeTag(link.innerText)));

    // a tag clicked down in the list: bring the filters back into view so the
    // change is visible
    if (link.closest(".publication")) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      document
        .querySelector(".pub-filters")
        ?.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth" });
    }
  });
}
