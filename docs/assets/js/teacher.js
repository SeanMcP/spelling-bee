(() => {
  document
    .getElementById("list-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      let list = data.get("list");
      list = list.split("\r\n");
      list = list.map((word) => word.toLowerCase());

      try {
        const response = await fetch("https://hash-browns.seanmcp.repl.co", {
          body: JSON.stringify({ data: list }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        if (!response.ok) throw new Error("Failed request");

        const { hash } = await response.json();

        document.getElementById("output").innerHTML = `
          <h2>Share this link with your students</h2>
          <p><a href="../student/?v1=${hash}" target="_blank">${hash}</a></p>
      `;
      } catch (err) {
        console.error(err);
        alert("Uh oh! Something went wrong.");
      }
    });
})();
