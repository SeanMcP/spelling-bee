---
layout: base.njk
title: Teacher
script: teacher.js
---

<form id="list-form">
    <div class="field">
        <label for="list"> Enter your spelling list </label>
        <small id="desc">One word per line</small>
        <textarea aria-describedby="desc" name="list" id="list" rows="8"></textarea>
    </div>
    <div>
        <button>Create list</button>
    </div>
</form>
<div id="output"></div>
