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
  filter="role != 'director' and role != 'prof' and role != 'friend' and role != 'mascot'" %}

<hr />

{% include list.html data="members" component="portrait"
  filter="role == 'friend'" %}

<hr />

{% include list.html data="members" component="portrait"
  filter="role == 'mascot'" %}

{% include section.html background="images/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
