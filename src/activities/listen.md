---
layout: base.njk
title: Listen
description: Hear the items from your list and spell them correctly
script: listen.js
---

{{ description }}

<form id="word-form" tabindex="-1">
    <div id="fields"></div>
    <button>Check</button>
</form>
<section id="end" hidden>
    <p>Nice practicing!</p>
    <button id="again">Go again?</button>
</section>
