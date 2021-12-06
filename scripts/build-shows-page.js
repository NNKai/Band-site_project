let showsInfo = [
    { date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location:'San Fransisco'},
    { date: 'Tue Sept 21 2021', venue: 'Pier 3 East', location:'San Fransisco'},
    { date: 'Fri Oct 15 2021', venue: 'View Lounge', location:'San Fransisco'},
    { date: 'Sat Nov 06 2021', venue: 'Hyatt Agency', location:'San Fransisco'},
    { date: 'Fri Nov 26 2021', venue: 'Moscow Center', location:'San Fransisco'},
    { date: 'Wed Dec 15 2021', venue: 'Press Club', location:'San Fransisco'},
];

window.onload = () => {
    loadTable(showsInfo)
}

loadTable(showsInfo);

function loadTable(showsInfo){
    const tableBody = document.getElementById('showsData');
    let dataHtml = '' ;

    for (let shows of showsInfo) {
        dataHtml +=`<tr><td>${shows.date}</td><td>${shows.venue}</td><td>${shows.location}</td></tr>`;
    }

    console.log(dataHtml)

    tableBody.innerHTML = dataHtml;
}