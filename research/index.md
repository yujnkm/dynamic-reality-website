---
title: Research
description: Publications from the Dynamic Reality Lab on augmented and virtual reality, biometric sensing, and human performance in wide-area XR.
nav:
  order: 1
  tooltip: Published works
# filter chip groups above the publication list. tags not listed here are
# collected into a "Topic" group automatically
filters:
  - label: Type
    tags: [Journal Paper, Full Paper, Short Paper, Workshop, Dissertation]
  - label: Platform
    tags: [AR, VR, XR, SAR, HoloLens 2, Magic Leap 2, Meta Quest 3, Vive Pro Eye]
---

{% include publication-filters.html data=site.data.publications %}

{% for pub in site.data.publications %}
  {% include publication.html pub=pub %}
{% endfor %}
