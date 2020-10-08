---
layout: base.njk
title: Scramble
description: Identify items from your spelling list from scrambled letters
script: scramble.js
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
