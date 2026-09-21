---
title: Team
description: The people of the Dynamic Reality Lab at the University of Nebraska–Lincoln, including director You-Jin Kim, PhD students, researchers, staff, and alumni.
nav:
  order: 3
  tooltip: About our team
---

{% include list.html data="members" component="portrait" 
  filter="role == 'director'" %}
{% include list.html data="members" component="portrait" 
  filter="role == 'prof'" %}

<hr />

{% comment %}
  Members are listed by role, in the order below. To add someone new, set their
  `role` in _members/<name>.md; they will appear in the right group automatically.
  Order: PhD -> postdoc -> master's -> research staff -> undergraduate.
{% endcomment %}

{% include list.html data="members" component="portrait"
  filter="role == 'phd'" %}
{% include list.html data="members" component="portrait"
  filter="role == 'postdoc'" %}
{% include list.html data="members" component="portrait"
  filter="role == 'grad'" %}
{% include list.html data="members" component="portrait"
  filter="role == 'staff'" %}
{% include list.html data="members" component="portrait"
  filter="role == 'undergrad'" %}

<hr />

{% include list.html data="members" component="portrait"
  filter="role == 'mascot'" %}

{% include section.html dark=true style="gray" %}

## {% include icon.html icon="fa-solid fa-graduation-cap" %}Alumni
{:.section-title}

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'alumni'" %}
