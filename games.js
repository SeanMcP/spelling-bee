import { WordsStore } from "./store.js";

(() => {
    const words = WordsStore.get()
    if (!words) window.location.replace('/')

    console.log({ words })
})();
