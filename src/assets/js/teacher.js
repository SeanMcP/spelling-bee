import { encrypt } from "./crypt.js";

(() => {
  document.getElementById("list-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let list = data.get("list");
    list = list.split("\r\n");
    list = list.map((word) => word.toLowerCase());

    const encrypted = encrypt(list);

    document.getElementById("output").innerHTML = `
        <h2>Share this link with your students</h2>
        <p><a href="../student/?code=${encrypted}" target="_blank">${encrypted}</a></p>
    `;
  });
})();
