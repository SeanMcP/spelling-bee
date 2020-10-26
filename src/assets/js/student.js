import { WordsStore } from "./store.js";

(async () => {
  const usp = new URLSearchParams(window.location.search);
  const v1 = usp.get("v1");

  if (v1) {
    try {
      const response = await fetch("https://hash-browns.seanmcp.repl.co/" + v1);

      if (!response.ok) throw new Error("Failed request");

      const { data } = await response.json();

      WordsStore.set(data);

      const { href } = location;

      location.replace(
        href.slice(0, href.lastIndexOf("student/")) + "practice/"
      );
    } catch (err) {
      console.error(err);
      alert("Uh oh! Something went wrong.");
    }
  } else {
    document.getElementById("code-form").removeAttribute("hidden");
  }
})();
