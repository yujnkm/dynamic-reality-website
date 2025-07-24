---
title: Contact Us
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact Us

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  text="jane@smith.com"
  link="jane@smith.com"
%}
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}

{% include section.html %}

## Lab Location

{% capture col1 %}

{%
  include figure.html
  image="images/photos/location_01.jpg"
  caption="Langford C [ARCC] - Room 421 <br>
  788 Ross St, College Station, TX 77843"
%}

{% endcapture %}

{% capture col2 %}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.3643549441467!2d-96.3386220303304!3d30.619502998414962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646839137174d43%3A0x9f0f8d71ead29d3b!2sArchitecture%20Center%20Bldg%20C%2C%203137%20TAMU%2C%20College%20Station%2C%20TX%2077840!5e1!3m2!1sen!2sus!4v1753391462597!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

<br>

## Parking

  If you are a scheduled visitor, please let me know so I can issue a full-day pass in advance. If you are not scheduled, the full-day pass is $15.

{% capture col1 %}

{%
  include figure.html
  image="images/photos/location_02.jpg"
  caption="Polo Rd Garage [PRG] <br>
  300 Polo Road, College Station, TX 77843"
%}

{% endcapture %}

{% capture col2 %}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1680.4042138547866!2d-96.3377022996341!3d30.622879434840765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683e74e996a75%3A0x6937157fd58bc82b!2sPolo%20Road%20Garage%20(PRG)!5e1!3m2!1sen!2sus!4v1753393619391!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
