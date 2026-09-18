---
title: Projects
nav:
  order: 2
  tooltip: Research projects from the lab
---

{% include section.html %}

{% capture content %}
{% include list.html component="card" data="projects" style="project" %}
{% endcapture %}

{% include grid.html content=content %}
