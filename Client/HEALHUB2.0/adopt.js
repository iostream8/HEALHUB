// xhr = new XMLHttpRequest();
// document.getElementById('search-btn').addEventListener('click', () => {
//     // text = document.getElementById('searchInput').value
//     xhr.open('GET', `https://dev-59e28a049qg7qov.api.raw-labs.com/your/endpoint/path`);
//     // xhr.setRequestHeader('X-RapidAPI-Key', 'cf2ba795femsh22eb4dd9571caf6p168e54jsn0c32b7719f1b');
//     // xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
//     xhr.onreadystatechange = () => {
//         console.log(`Remaining readystate -> ${xhr.readyState}`)
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             res = JSON.parse(xhr.responseText)
//             console.log(res)


//             output = ``
//             for (let i = 0; i < res.albums.items.length; i++) {
//                 // let text =text.charAt(0).toUpperCase()+ text.slice(1);
//                 if (res.albums.items[i].data.artists.items[0].profile.name == text || res.artists.items[i].data.profile.name == text)
//                 {
//                     output += `
//                     <div style="width: 23%;margin:15px;">
//                         <a href="${res.albums.items[i].data.uri}" style="text-decoration:none;color:black;"><img src="${res.albums.items[i].data.coverArt.sources[0].url}" alt="">
//                         <h2>${res.albums.items[i].data.name}</h2>
//                         <h4>${res.albums.items[i].data.artists.items[0].profile.name}</h4></a>
//                     </div>
//                     `

//                 }
//                 document.getElementById("mydiv").innerHTML = output

//             }



//         }
//     }
//     xhr.send();
// })
(this.getData)()

async function getData() {
    const response = await fetch("https://dev-59e28a049qg7qov.api.raw-labs.com/your/endpoint/path");
    const data = await response.json();
    console.log(data);
    output = ``
    for(let i=0;i<data.length;i++)
    {
        // console.log(i,data[i].name)
        // const para = document.createElement("img");
        // para.src = data[i].image;
        output += `
                        <div>
        <img src="./assets/photo-1444212477490-ca407925329e.jpeg" style="width: 200px; height: 200px;margin-left: 7%;
        margin-top: 6%;">
        <h1 style="margin-left:6%;">Name :Sheru</h1>
        <p style="margin-left: 13%;margin-top:-2%;">Age:7</p>
        </div>
          `
        
        
       
    //    document.body.appendChild(para);
    }
    document.getElementById("mydiv").innerHTML = output
    

    
  }
//   xhr=new XMLHttpRequest();
//   xhr.open("GET",`https://dev-59e28a049qg7qov.api.raw-labs.com/your/endpoint/path`);
//   xhr.onreadystatechange = () => {
//             console.log(`Remaining readystate -> ${xhr.readyState}`)
//             if (xhr.readyState == 4 && xhr.status == 200) {
//                 res = JSON.parse(xhr.responseText)
//                 console.log(res)
//                 output = ``
//                     for (let i = 0; i < res.length; i++) {
//                         output += `
//           <div style="width: 23%;margin:15px;">
//         <a href="${res.items[i]}" style="text-decoration:none;color:black;">
//         <img src="${res.img.item[i]}" alt="">
//       <h2>${res.albums.items[i].data.name}</h2>
//        <h4>${res.albums.items[i].data.artists.items[0].profile.name}</h4></a>
//         </div>
//           `
//          }
//         document.getElementById("mydiv").innerHTML = output
                        
//         }
//     xhr.send();
//     }
// // function getData()
// // {
// // fetch("").then(res => console.log(res.json()))

// // }


// const apiLink = "https://dev-59e28a049qg7qov.api.raw-labs.com/your/endpoint/path";

// async function fetchDataAndRender() {
//     const mydiv = document.getElementById("mydiv");

//     try {
//         const response = await fetch(apiLink);
//         const data = await response.json();

//         data.forEach(item => {
//             const imageSrc = item.image;
//             const name = item.name;
//             const age = item.age;

//             // Create a new HTML element for each data item
//             const newElement = document.createElement("div");
//             newElement.className = "column";  // Apply the column class
//             newElement.innerHTML = `
//                 <img src="${imageSrc}" alt="${name}" width="100">
//                 <p>Name: ${name}</p>
//                 <p>Age: ${age}</p>
//             `;

//             // Append the new element to the 'mydiv' container
//             mydiv.appendChild(newElement);
//         });
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchDataAndRender();