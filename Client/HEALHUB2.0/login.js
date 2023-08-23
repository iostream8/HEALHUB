document.getElementById("box1").addEventListener("click",(e)=>{
    e.preventDefault()
    // user_text=document.getElementById('name').value
    // console.log(user_text);
    user_Email=document.getElementById("Email").value
    console.log(user_Email);
    user_Pass=document.getElementById("pass").value
    console.log(user_Pass)
    User={
        // name:user_text,
        email:user_Email,
        password:user_Pass
    }
    // console.log(User);
    const xhr=new XMLHttpRequest()
    url=`http://localhost:8821/SignUp`
    xhr.open(`GET`,url)
    xhr.setRequestHeader(`Access-Control-Allow-Origin`,`*`)
    xhr.setRequestHeader(`Content-Type`,`application/json`)

    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4&& xhr.status==200){
            res=JSON.parse(xhr.responseText)
            console.log(res);
            for (let i = 0; i < res.length; i++) 
            {
                if (res[i].email==user_Email && res[i].password==user_Pass)
                {
                    console.log("success");
                    window.location.href="http://localhost:5500/about.html"
                    break;
                }
                else
                {
                    document.getElementById('message').innerHTML="incorrect"
                    console.log('incorrect')
                
                // if (res[i].email!=user_Email || res[i].password!=user_Pass)

                
                    // console.log("invalid");
                    // break;
                }
                
            }




        }
    }
    xhr.send()
})
