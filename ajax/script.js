form1 = document.getElementById('form1')
form1.addEventListener('submit' , Button1)

async function Button1(event){
    event.preventDefault()
    // create xml response
    var xhr = new XMLHttpRequest()
    // get text from file

    xhr.open('GET' , 'text.txt' , true)
    // load 
    // xhr.onload = function(){
    //     if(this.status === 200){
    //         console.log(this.responseText)
    //     }
    // }


    /* 
    readyState
    - 0: Requet chưa được khởi tạo 
    - 1: Request đã được thiết lập
    - 2: Request đã được gửi
    - 3: Request đang được xử lý 
    - 4: Kết thúc Request
    */
   /*
   onreadystatechange
   Một Event Handler lắng nghe và xử lý một sự kiện khi có thay đổi về trạng thái nào diễn ra.
   */
    
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("text1").innerHTML = this.response 
        }
    }
    // send request 
    xhr.send()
}
form2 = document.getElementById('form2')
form2.addEventListener('submit' , Button2)
async function Button2 (event) {
    event.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.open('GET' , 'user.json' , true)
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200)
        {
            document.getElementById("text2").innerHTML = this.response 
        }
    }
    xhr.send()
}
form3 = document.getElementById('form3')
form3.addEventListener('submit' , Button3)
async function Button3 (event){
	event.prenventDefault()
    $.ajax({
        type: "GET",
        url: "/search",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });
}
