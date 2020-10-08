---
layout: base.njk
title: Practice
---

{% for activity in collections.activities -%}
- [**{{ activity.data.title }}**]({{ activity.url | url }}) - {{ activity.data.description }}
{% endfor -%}
