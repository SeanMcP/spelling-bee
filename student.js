import { decrypt } from "./crypt.js";

(() => {
  const usp = new URLSearchParams(window.location.search);
  const code = usp.get("code");

  const words = decrypt(code);
  const wordList = document.getElementById("word-list");

  words.forEach((word) => {
    wordList.innerHTML += `<li>${word}</li>`;
  });
})();
