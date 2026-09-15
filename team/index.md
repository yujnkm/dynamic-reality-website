---
title: Team
nav:
  order: 3
  tooltip: About our team
---

{% include list.html data="members" component="portrait" 
  filter="role == 'director'" %}
{% include list.html data="members" component="portrait" 
  filter="role == 'prof'" %}

<hr />

{% include portrait.html lookup="lijun-mao" %}
{% include portrait.html lookup="thomas-marxsen" %}
{% include portrait.html lookup="everett-wahlqvist-hardy" %}

<hr />

{% include list.html data="members" component="portrait"
  filter="role == 'mascot'" %}

{% include section.html dark=true style="gray" %}

# {% include icon.html icon="fa-solid fa-graduation-cap" %}Alumni

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'alumni'" %}
