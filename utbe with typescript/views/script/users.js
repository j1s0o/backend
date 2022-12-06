fetch("/user/verify", {}).then(function (res) {
  if (res.redirected === true) {
    window.location.href = '/login';
  } 
  else {
    res.json().then(function (res) {
        if (res.result !== 'admin') {
            window.location.href = '/login'
        }
        else{
            fetch("/user/all")
            .then((res) => res.json())
            .then(function (user) {
              let row = document.getElementById("row");
              for (var i = 0; i < user.user.length; i++) {
                row.innerHTML += `<tr><td>${i + 1}</td> <td> ${user.user[i].username} </td> <td>${user.user[i].password} </td> </tr>`;
              }
            });
        }
    })

  }


})