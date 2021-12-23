let myKey = "a0098080-f123-4319-9617-26b9c037ccdc";

let n = axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${myKey}`)

.then((result)=>{
    return result.data
}).then((completeData)=>{
    
    let data1="";
    completeData.map((values)=>{

        let myTimeStamp = values.date;

        let d = new Date(myTimeStamp);
        let formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        let dateString= formattedDate;
        dateString = new Date(dateString).toDateString();
        dateString = dateString.split(' ').slice(0, 4).join(' ');
        
        data1+=`

        <div class="shows--venuedateplace">
            <div class="headerdate--container">
                <p class="shows--header">Date</p>
                <p class="shows--date">${dateString}</p>
            </div>
            <div class="venue--container">
                <p class="shows--header">Venue</p>
                <p class="shows--place">${values.place}</p>
            </div>
            <div class="location--container">
                <p class="shows--header">Location</p>
                <p class="shows--location">${values.location}</p>
            </div>
        <button><h2>BUY TICKETS</h2></button>

        </div>
        <div class="underline"></div>
    `;
    })

    document.getElementById("showdates--containers").innerHTML=data1;
}).catch((err)=> {
    console.log(err);
})

