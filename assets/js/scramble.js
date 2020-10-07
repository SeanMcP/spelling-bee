import { WordsStore } from "./store.js";
import { shuffle } from "./utils.js";

(() => {
  const again = document.getElementById("again");
  const end = document.getElementById("end");
  const fields = document.getElementById("fields");
  const wordForm = document.getElementById("word-form");
  let words = shuffle(WordsStore.get());

  function renderWords() {
    fields.innerHTML = "";
    words.forEach((word) => {
      let scrambledWord = word;
      while (scrambledWord === word) {
        scrambledWord = shuffle(word.split("")).join("");
      }
      const field = document.createElement('div')
      field.classList.add('field')

      const label = document.createElement('label')
      label.innerHTML = `Scrambled <b>${scrambledWord}</b>`;
      label.htmlFor = word
      field.appendChild(label)

      const input = document.createElement('input')
      input.pattern = word
      input.id = word
      field.appendChild(input)

      fields.appendChild(field)
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