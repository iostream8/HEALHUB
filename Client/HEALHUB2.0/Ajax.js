xhr = new XMLHttpRequest();

xhr.open("GET", `https://dev-59e28a049qg7qov.api.raw-labs.com/your/endpoint/path`);

xhr.onreadystatechange = () => {
    console.log("hello");
    console.log(`Remaining readystate -> ${xhr.readyState}`)
    if (xhr.readyState == 4 && xhr.status == 200) {
        res = JSON.parse(xhr.responseText)
        
        console.log(res)
        output = ``
        for (let i = 0; i < res.length; i++) {
        output += `
                        <div style="margin-left:13%">
        <img src="${res[i].image}" style="width: 200px; height: 200px;margin-left: 7%;
        margin-top: 6%;">
        <h1 style="margin-left:6%;">Name :${res[i].name}</h1>
        <p style="margin-left: 13%;margin-top:-2%;">Age:${res[i].age}</p>
        </div>
          `
        }
        document.getElementById("mydiv").innerHTML = output

    }
    
}
xhr.send();