// verify force login
fetch("/user/verify", {}).then(function (user) {
  if (user.redirected === true) {
    window.location.href = "/login";
  } else {
    fetch("/video/admin")
      .then((video) => video.json())
      .then(function (video) {
        user.json().then(function (user) {
          let form = document.getElementById("form");
          if (user.result === "admin") {
            form.innerHTML = `<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Decription</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody id="row">

            </tbody>    
        </table>`
            let row = document.getElementById("row");
            for (var i = 0; i < video.video.length; i++) {
              const name = video.video[i].name;
              row.innerHTML += `<tr><td>${name}</td> <td> ${video.video[i].img} </td> <td>${video.video[i].decription} </td><td><button id='${name}' onClick='deleteVideo(this.id)' >delete</button></td></tr>`;
            }
          } else if (user.result === undefined) {
            window.location.href = "/login";
          } else {
            form.innerHTML = `<h1>concac</h1>`;
          }
        });
      });
  }
});


//delete video
function deleteVideo(name) {
  $.ajax({
    type: "POST",
    url: "/video/delete",
    data: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
    dataType: "json",
  });
}
