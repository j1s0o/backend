fetch("/user/verify", {}).then(function (res) {
    if (res.redirected === true) {
      window.location.href = '/login';
    } 
  else{
      fetch("/video/all")
      .then((res) => res.json())
      .then(function (video) {
        let row = document.getElementById("row");
        for (var i = 0; i < video.video.length; i++) {
          row.innerHTML += `<tr><td>${video.video[i].name}</td> <td> ${video.video[i].img} </td> <td>${video.video[i].decription} </td> </tr>`;
        }})
  }})