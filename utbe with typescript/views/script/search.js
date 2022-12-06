document.getElementById("search").addEventListener("submit", Search);

async function Search(event) {
  event.preventDefault();

  const search = document.getElementById("search-text").value;
  await fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ search }),
  })
    .then((res) => res.json())
    .then(function (data) {
      alert(JSON.stringify(data));
    });
}
