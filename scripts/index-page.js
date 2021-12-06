let comment = [
    {"name": "Connor Walton", 
     "date": "02/17/2021", 
     "body":"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    
    {"name": "Emilie Beach", 
     "date": "01/09/2021", 
     "body":"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    
    {"name": "Miles Acosta",
     "date": "12/20/2020", 
     "body":"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
];

// let displayContent = document.getElementById("commentcontainer")

// displayContent.innerText = 'Connor Walton' + '02/17/2021' + 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'

// let divElement = document.createElement('div');

// let addComment = document.createTextNode('This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.');

// divElement.appendChild(addComment);

// let containerDiv = document.querySelector('.commentcontainer');

const form = document.querySelector('form');
const commentSection = document.querySelector ('.commentcontainer1')

function addAComment(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comments = document.getElementById("comments").value;
    commentSection.innerHTML += `
        <h3>${name}</h3>
        <p>${comments}</p>

    `;
}

form.addEventListener('submit', addAComment);