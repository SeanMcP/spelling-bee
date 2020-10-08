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
      const number = i + 1;
      const id = `listen-${number}`;
      let utterance = new SpeechSynthesisUtterance(word);

      const field = el("div", { class: "field" });

      const button = el("button", {
        "aria-label": `Listen to word ${number}`,
        textContent: "Listen",
      });
      button.addEventListener("click", (event) => {
        event.preventDefault();
        speechSynthesis.speak(utterance);
      });

      field.appendChild(button);

      const label = el("label", {
        htmlFor: id,
        innerHTML: `Word #${number}`,
      });
      field.appendChild(label);

      const input = el("input", {
        autocomplete: "chrome-off",
        id,
        pattern: word,
        required: true,
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
