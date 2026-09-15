---
title: Research
nav:
  order: 1
  tooltip: Published works
---

{% for pub in site.data.publications %}
  {% include publication.html pub=pub %}
{% endfor %}
