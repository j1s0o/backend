const form = document.getElementById('Login-Form');
form.addEventListener('submit', LoginUser)
// send data as JSON
async function LoginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm_password').value;
    if (password !== confirm){
        alert('cc')
    }
    else{
        await fetch('/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        }).then(function (res) {
            if(res.err === null){
                window.location.href = '/login'
            }
            else{
                alert('res.err')
            }
        })
    })
    }

}