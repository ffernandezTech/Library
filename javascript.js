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



const book1 = new Book('Eragon', 'Christopher Paolini', 450, 'read');

myLibrary.push(book1);


function addBookToLibrary(name, author, pages, status){

    let entry = new Book(name, author, pages, status);
    myLibrary.push(entry);

    

}


addBookToLibrary('Marsfield Park', 'Jane Austen', 500, 'reading');
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 500, 'read');




// myLibrary.forEach( item =>{
//     console.log(`ID: ${item.id}, Title: ${item.name}, Author: ${item.author} ,Number of Pages: ${item.pages},
//         Status: ${item.status} 
//         `)
// });


const mainDisplay = document.querySelector('.mainContainer');
const newBookBtn = document.querySelector('.CreateBook');
const myform = document.getElementById('bookEntry');
let count=0;

newBookBtn.addEventListener('click', ()=>{


   //Issue its working, but only after the second click.
    //  alert('Working');

    if(myform.style.display === 'none')
    {
        alert('its true');
        myform.style.display= 'block';
    }
    else
    {
         alert('its false');
         myform.style.display='none'
    }

    // if(myform.checkVisibility() === false)
    // {

    //     console.log(myform.checkVisibility());
    //     alert('its false');
    //     myform.style.visibility= 'visible';
    // }
    // else {
    //     console.log(myform.checkVisibility({visibilityProperty:true}));
    //     alert('its true');
    //     myform.style.visibility= 'hidden';
    // }
 


});
 

