---
title: Contact Us
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact Us

Are you interested in joining the lab? Reach out for opportunities!

{%
  include button.html
  type="email"
  text="dynamicrealitylab@gmail.com"
  link="dynamicrealitylab@gmail.com"
%}

For research related questions or official inquiry, please contact us here.

{%
  include button.html
  type="email"
  text="drlab@unl.edu"
  link="drlab@unl.edu"
%}

{% include section.html %}

## Lab Location

{% capture col1 %}

{%
  include figure.html
  image="images/photos/location_01.jpg"
  caption="Nebraska Hall [NH] - Room W192 <br>
  900 N 16th St, Lincoln, NE 68508"
%}

{% endcapture %}

{% capture col2 %}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.1866208322483!2d-96.69799344611833!3d40.82278693428522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796bf00283e6527%3A0x28044e72f1967e94!2sNebraska%20Hall!5e1!3m2!1sen!2sus!4v1779999925136!5m2!1sen!2sus" width="480" height="356" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

<br>

{% include section.html dark=true %}

{% include figure.html image="images/affiliations.png" %}