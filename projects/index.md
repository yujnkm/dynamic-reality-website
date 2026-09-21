---
title: Projects
description: Research projects from the Dynamic Reality Lab, spanning wide-area outdoor AR, cognitive-aware spatial computing, and AI-driven avatars in immersive narrative.
nav:
  order: 2
  tooltip: Research projects from the lab
---

{% include section.html %}

{% capture content %}
{% include list.html component="card" data="projects" style="project" %}
{% endcapture %}

{% include grid.html content=content %}
