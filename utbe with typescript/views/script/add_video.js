const form = document.getElementById('add')
form.addEventListener('submit' , Add)
function Add (event){
    event.preventDefault()
    const name = document.getElementById('name').value
    const img = document.getElementById('img').value
    const decription = document.getElementById('decription').value
    $.ajax({
        type: "post",
        url: "/video/video_add",
        data: JSON.stringify({
            name , 
            img ,
            decription ,
        }),      
        headers: {
            "Content-Type": "application/json",
        },
        dataType: "json",
        success: function (response) {
            if(response.process === true){
                alert("Video added successfully")
            }
            else{
                alert("False cmnr")
            }
        }
    });

}