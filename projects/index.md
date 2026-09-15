---
title: Projects
nav:
  order: 2
  tooltip: Software, datasets, and more
---

{% include section.html size="medium" %}

{% capture content %}
{% include list.html component="card" data="projects" style="project" %}
{% endcapture %}

{% include grid.html content=content style="two" %}
