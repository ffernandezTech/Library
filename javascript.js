const myLibrary = [];


function Book(name, author, pages, status){

    this.id = crypto.randomUUID();
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.status = status,
    this.sayInfo = function (){
    console.log(`The book ${this.name} by ${this.author} has ${this.pages} and you have ${this.status} it`)

    };

}



// const book1 = new Book('Eragon', 'Christopher Paolini', 450, 'read');

// myLibrary.push(book1);


function addBookToLibrary(name, author, pages, status){

    let entry = new Book(name, author, pages, status);
    myLibrary.push(entry);

    

}

addBookToLibrary('Eragon', 'Christopher Paolini', 450, 'read');
addBookToLibrary('Marsfield Park', 'Jane Austen', 500, 'reading');
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 500, 'read');




// myLibrary.forEach( item =>{
//     console.log(`ID: ${item.id}, Title: ${item.name}, Author: ${item.author} ,Number of Pages: ${item.pages},
//         Status: ${item.status} 
//         `)
// });


const mainDisplay = document.querySelector('.mainContainer');
const newBookBtn = document.getElementById('CreateBook');
const submitBtn = document.querySelector('.submitBtn');
const btnDisplay = document.getElementById('DisplayLibrary');
const diag = document.querySelector('dialog');



const myform = document.getElementById('bookEntry');
const myFormCss = window.getComputedStyle(myform);



newBookBtn.addEventListener('click', (e)=>{

    // if(myFormCss.getPropertyValue('display') === 'none')
    // {
    //     // alert('display test');
    //     myform.style.display= 'block';
    // }
    // else
    // {
    //     //  alert('its block');
    //      myform.style.display='none';
    // }
    // e.stopImmediatePropagation();
   
    diag.showModal();






});

submitBtn.addEventListener('click', (e)=>{

    // alert('STOP');
    e.stopImmediatePropagation();
    e.preventDefault();

    

});

const tableBody = document.querySelector('tbody');

function fillTable(){

        myLibrary.forEach( item =>{
          
            const row = document.createElement('tr');

            const cell1 = document.createElement('td');
            cell1.textContent = item.id;
            row.appendChild(cell1);

            const cell2 = document.createElement('td');
            cell2.textContent = item.name;
            row.appendChild(cell2);

            const cell3 = document.createElement('td');
            cell3.textContent = item.author;
            row.appendChild(cell3);

            const cell4 = document.createElement('td');
            cell4.textContent = item.pages;
            row.appendChild(cell4);

            const cell5 = document.createElement('td');
            cell5.textContent = item.status;
            row.appendChild(cell5);

            tableBody.appendChild(row);
        });

        // alert('Currently in function');

}






btnDisplay.addEventListener('click', fillTable);








