let myKey = "6e49b848-3d3c-4077-85d1-71b97dd1c437";
let anotherKey = "67fb32cb-931e-4d9a-80bd-4d8639fba77b";

let n = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`)

n.then((data) =>{
    return data.data
}).then((completeData)=>{
    
    let data1 = "";
    completeData.map((values)=>{

        let d = new Date(values.timestamp);
        let formattedDate = d.getDay() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        let dateString= formattedDate;
        dateString = new Date(dateString).toUTCString();
        dateString = dateString.split(' ').slice(0, 4).join(' ');
        

        data1+=`

        <canvas class="backgroundavatar"></canvas>
        <div class="comment--namedates">
        
        <p class="comment--names">${values.name}</p>
        <p class="comment--dates">${formattedDate}</p>
        </div>
        <p class="comment--body">${values.comment}</p>
        <p class="likes">${values.likes}</p>   
        <div class="underline"></div>
    `;

    })

    document.getElementById("commentcontainer1").innerHTML=data1;
}).catch((err)=> {
    console.log(err);
})


const form = document.querySelector('form');
const commentSection = document.querySelector ('#commentcontainer1')



const headers = {
    headers:{
    'content-type': 'application/json',
    }
  }



function addAComment(e){
    e.preventDefault();
    const names = document.getElementById("name").value;
    const comments = document.getElementById("comments").value;
    
let h = axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`, {
    "name" : `${names}`,
    "comment": `${comments}`,
    
}, headers )
h.then((data) =>{
    location.reload()
    data.data.push(H)
})

}
form.addEventListener('submit', addAComment)

async function addADeleteBtn(){
    let commentcontainer1 = await n;
    const clickDelete = document.querySelectorAll(".delete_button");
    for (var i= 0; i <clickDelete.length; i++){
        clickDelete[i].addEventListener('click', (event)=>{
            console.log(id)
            if(window.confirm('close it?')){
                axios.delete()
            }
        })
    }
}