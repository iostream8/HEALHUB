document.getElementById("box1").addEventListener("click",(e)=>{
    e.preventDefault()
    user_text=document.getElementById('name').value
    console.log(user_text);
    user_Email=document.getElementById("Email").value
    console.log(user_Email);
    user_Pass=document.getElementById("pass").value
    console.log(user_Pass)
    User={
        name:user_text,
        email:user_Email,
        password:user_Pass
    }
    console.log(User);
    const xhr=new XMLHttpRequest()
    url=`http://localhost:8821/SignUp`
    xhr.open(`POST`,url)
    xhr.setRequestHeader(`Access-Control-Allow-Origin`,`*`)
    xhr.setRequestHeader(`Content-Type`,`application/json`)

    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4&& xhr.status==200){
            // console.log(xhr.responseText)
            window.location.href="./about.html"
            // console.log(User);
        }
    }
    xhr.send(JSON.stringify(User))
});
