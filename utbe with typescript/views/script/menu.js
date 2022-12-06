fetch("/user/verify", {}).then(function (res) {
  if (res.redirected === true) {

  } else {
    res.json().then(function (res) {
      if (res.result === null) {
      } else {
        var user = document.getElementById("menu-container");
        user.innerHTML += `<a class="link-container" href="/">
        <span class="menu-links">${res.result}</span>
      </a><a class="link-container" id="logout">
      <span class="menu-links">Log-out</span></a>
      <form id="search" class="link-container search-box">
      <input type ="text" class ="txt" placeholder ="Search Here..." id="search-text">
      <button type="submit" class="btn"><i class ="fa fa-search" id="submit"></i></button></form>`;
        document.getElementById("login").remove();
        document.getElementById("register").remove();
        document.getElementById("user").remove();
        document
          .getElementById("logout")
          .addEventListener("click", function () {
            fetch("/user/logout").then(function (res) {
              window.location.reload("/");
            });
          });
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
          
          
        }

        
    });
  }
});


