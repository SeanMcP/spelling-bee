(() => {
  document.getElementById("list-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const list = data.get("list");
    // TODO: Test this replaceAll on Windows/Linux
    const code = list.replaceAll("\n", "-").toLowerCase();

    document.getElementById("output").innerHTML = `
        <h2>Share this link with your students</h2>
        <p><a href="../student/?code=${code}" target="_blank">${code}</a></p>
    `;
  });
})();
