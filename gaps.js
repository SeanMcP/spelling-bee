import { WordsStore } from "./store.js";

(() => {
  const output = document.getElementById("output");
  const wordForm = document.getElementById("word-form");
  const words = WordsStore.get();
  let index = 0;

  function renderWord() {
    index = location.hash ? parseInt(location.hash.slice(1)) : index;
    wordForm.action = '#' + (index + 1)
    output.innerHTML = "";
    const word = words[index];
    const gapCount = Math.floor(word.length / 2);
    const gaps = [];
    for (let i = 1; i <= gapCount; i++) {
      const randomI = Math.floor(Math.random() * word.length);
      if (gaps.includes(randomI)) {
        i--;
      } else {
        gaps.push(randomI);
      }
    }

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (gaps.includes(i)) {
        const input = document.createElement("input");
        input.setAttribute("aria-label", "missing letter");
        // TODO: Display a better error message
        input.pattern = letter;
        output.appendChild(input);
      } else {
        output.innerHTML += `<span>${letter}</span>`;
      }
    }
  }

  renderWord();
})();
