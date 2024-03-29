import { WordsStore } from "./store.js";
import { el, shuffle } from "./utils.js";

(() => {
  const again = document.getElementById("again");
  const end = document.getElementById("end");
  const output = document.getElementById("output");
  const wordForm = document.getElementById("word-form");
  let words = shuffle(WordsStore.get());
  let index = 0;

  function renderWord() {
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
        const input = el("input", {
          "aria-label": "missing letter",
          maxLength: 1,
          minLength: 1,
          pattern: letter
        });
        // TODO: Display a better error message
        output.appendChild(input);
      } else {
        output.innerHTML += `<span>${letter}</span>`;
      }
    }
  }

  wordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextIndex = index + 1;
    if (nextIndex < words.length) {
      index++;
      renderWord();
      wordForm.tabIndex = 0;
      wordForm.focus();
    } else {
      end.removeAttribute("hidden");
      wordForm.tabIndex = -1;
    }
  });

  again.addEventListener("click", () => {
    end.hidden = true;
    wordForm.focus();
    index = 0;
    words = shuffle(words);
    renderWord();
  });

  renderWord();
})();
