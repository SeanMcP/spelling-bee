import { WordsStore } from "./store.js";
import { el, shuffle } from "./utils.js";

(() => {
  const again = document.getElementById("again");
  const end = document.getElementById("end");
  const fields = document.getElementById("fields");
  const wordForm = document.getElementById("word-form");
  let words = shuffle(WordsStore.get());

  function renderWords() {
    fields.innerHTML = "";
    words.forEach((word, i) => {
      const id = `scramble-${i + 1}`
      let scrambledWord = word;
      while (scrambledWord === word) {
        scrambledWord = shuffle(word.split("")).join("");
      }
      const field = el("div", { class: "field" });

      const label = el("label", {
        htmlFor: id,
        innerHTML: `Scrambled <b>${scrambledWord}</b>`,
      });
      field.appendChild(label);

      const input = el("input", {
        autocomplete: 'chrome-off',
        id,
        pattern: word,
        required: true
      });
      field.appendChild(input);

      fields.appendChild(field);
    });
  }

  wordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    end.removeAttribute("hidden");
    wordForm.tabIndex = -1;
  });

  again.addEventListener("click", () => {
    end.hidden = true;
    words = shuffle(words);
    renderWords();
    wordForm.tabIndex = 0;
    wordForm.focus();
  });

  renderWords();
})();
