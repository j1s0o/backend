async function Search(event) {
  event.preventDefault();

  const search = document.getElementById("search-text").value;
  $.ajax({
    type: "POST",
    url: "/video/search",
    headers : {
        "Content-Type": "application/json"
    }, 
    data: JSON.stringify({search}),
    dataType: "json",
    success: function (response) {
        alert(JSON.stringify(response))
    }
});
}