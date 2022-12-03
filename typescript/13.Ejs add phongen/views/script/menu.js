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
      <span class="menu-links">Log-out</span>
    </a>`;
        document.getElementById("login").remove();
        document.getElementById("register").remove();
        document.getElementById("logout").addEventListener("click", function () {
          fetch("/user/logout").then(function (res) {
            window.location.reload("/")
          })  
        })
      }
    });
  }
});
