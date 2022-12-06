const form = document.getElementById('Login-Form');
form.addEventListener('submit', LoginUser)
// send data as JSON
async function LoginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        }),
    }).then((res) => res.json())
    if (result.process === true) {
        // window.location.href = "/";
        document.cookie = `Session=${result.session}`
        window.location.href = "/"
    }
    else {
        
    }
}
