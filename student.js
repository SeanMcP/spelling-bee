import { decrypt } from "./crypt.js";
import { WordsStore } from "./store.js";

// TODO: Remove this example FNQj-QjjN-FQJ-QqqB
(() => {
  const usp = new URLSearchParams(window.location.search);
  const code = usp.get("code");

  if (code) {
    const words = decrypt(code);

    WordsStore.set(words);

    window.location.replace("./games.html");
  } else {
    document.getElementById("code-form").removeAttribute("hidden");
  }
})();
