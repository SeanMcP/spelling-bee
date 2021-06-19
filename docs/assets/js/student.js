import { WordsStore } from "./store.js";

(() => {
  const usp = new URLSearchParams(window.location.search);
  const code = usp.get("code");

  if (code) {
    const words = code.split("-");

    WordsStore.set(words);

    const { href } = location;
    location.replace(href.slice(0, href.lastIndexOf("student/")) + "practice/");
  } else {
    document.getElementById("code-form").removeAttribute("hidden");
  }
})();
