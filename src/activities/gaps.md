---
layout: base.njk
title: Gaps
description: Fill in missing characters to spell items from your list
script: gaps.js
styles: gaps.css
---

{{ description }}

<form id="word-form" tabindex="-1">
    <div id="output"></div>
    <button class="js-start">Check</button>
</form>
<section id="end" hidden>
    <p>Nice practicing!</p>
    <button id="again">Go again?</button>
</section>
