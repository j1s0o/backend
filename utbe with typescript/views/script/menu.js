fetch("/user/verify", {}).then(function (res) {
  if (res.redirected === true) {
  } else {
    res.json().then(function (res) {
      if (res.result === null) {
      }
      else {
        var user = document.getElementById("menu-container");
        user.innerHTML += `<a class="link-container" href="/">
        <span class="menu-links">${res.result}</span>
      </a><a class="link-container" id="logout">
      <span class="menu-links">Log-out</span></a>`;
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
        if(res.result === 'admin')
        {
          user.innerHTML += `<a class="link-container" href="/video/add_video">
          <span class="menu-links">Add Video</span>
        </a>
        <a class="link-container" href="/users">
          <span class="menu-links">Users</span>
        </a>
        <form id="search" class="link-container search-box">
          <input type ="text" class ="txt" placeholder ="Search Here..." id="search-text">
          <button type="submit" class="btn"><i class ="fa fa-search" id="submit"></i></button></form>`
        }
        else
        {
          user.innerHTML +=` <form id="search" class="link-container search-box">
          <input type ="text" class ="txt" placeholder ="Search Here..." id="search-text">
          <button type="submit" class="btn"><i class ="fa fa-search" id="submit"></i></button></form>`
        }
        document.getElementById("search").addEventListener("submit", Search);
        
      }
    });
  }
});
