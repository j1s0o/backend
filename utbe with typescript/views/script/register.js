const form = document.getElementById("Login-Form");
form.addEventListener("submit", LoginUser);
// send data as JSON
async function LoginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm_password").value;
  if (password !== confirm) {
    alert("cc");
  } 
  else {
    // const result = await fetch("/user/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // }).then((res) => res.json());
    // if (result.process === true) {
    //     window.location.href = '/login'
    // } else {
    //   alert("ccc")
    // }
    $.ajax({
      type: "POST",
      url: "/user/register",
      data: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      dataType: "json",
      success: function (res) {
        if (res.process === true) {
          window.location.href = "/login";
        }
        else{
          document.getElementById("panel").innerHTML = "Something went wrong"
          $(document).ready(function () {
            $("#panel").slideDown("slow");
          });
        }
      },
    });
  }
}
