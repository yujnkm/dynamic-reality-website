---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

We are a collaborative group of students and researchers passionate about immersive media and interactive experiences. Our team brings together diverse skills in design, programming, and research to push the boundaries of VR and AR.

{% include section.html %}

{% include list.html data="members" component="portrait" 
  filter="role == 'director'" %}
{% include list.html data="members" component="portrait" 
  filter="role == 'prof'" %}

<hr />

{% include list.html data="members" component="portrait"
  filter="role != 'director' and role != 'prof' and role != 'friend' and role != 'mascot' and role !='alumni'" %}

<hr />

{% include list.html data="members" component="portrait"
  filter="role == 'mascot'" %}

{% include section.html dark=true %}

# {% include icon.html icon="fa-solid fa-users" %}Alumni

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'alumni'" %}
