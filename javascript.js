

const mainDisplay = document.querySelector('.mainContainer');


// Elements that we need to get in order to add a new book
const newBookBtn = document.getElementById('CreateBook');
const submitBtn = document.querySelector('.submitBtn');
const diag = document.querySelector('dialog');
const myform = document.getElementById('bookEntry');
const myFormCss = window.getComputedStyle(myform);


// elements are need to get in order to display out current library.
const btnDisplay = document.getElementById('DisplayLibrary');
const btnCancel = document.querySelector('.cancelBtn');
const myTable = document.querySelector('table');
//Dont think this compute style is required.
const myTableCss= window.getComputedStyle(myTable);
const tableBody = document.querySelector('tbody');




// Below kind of working class for my books
class myLibrary{

    static #myLibraryCollection = [];

    constructor(){
       this.id = crypto.randomUUID();
       
    }
   static get myBooks(){
        return this.#myLibraryCollection;
    }
    static myBookInfo(bookInfo){
      this.#myLibraryCollection.push(bookInfo);
    }

  
    

}


class myBook extends myLibrary{

    constructor(name, author, pages, status){
        super();
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
        let bookInfo = {id: this.id, name:this.name, author:this.author,pages: this.pages, status:this.status};
        myLibrary.myBookInfo(bookInfo);
      
    }
}

const book1 = new myBook('Eragon', 'Christopher Paolini', 450, 'read');
const book2 = new myBook('Marsfield Park', 'Jane Austen', 500, 'reading');
const book3 = new myBook('Pride and Prejudice', 'Jane Austen', 500, 'read');




class tableRows{

    constructor(bookID, bookName, bookAuthor, bookPages, bookStatus, index){
        
        const arrayIndex = index;

        const bookROW = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = bookID;
        bookROW.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = bookName;
        bookROW.appendChild(nameCell);

        const authorCell = document.createElement('td');
        authorCell.textContent= bookAuthor;
        bookROW.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = bookPages;
        bookROW.appendChild(pagesCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = bookStatus;
        bookROW.appendChild(statusCell);

        const deleteCell = document.createElement('td');
         let btnDelete = document.createElement('input');
            btnDelete.type= 'button';
            btnDelete.className = 'btbDelete';
            btnDelete.value = 'Delete';
        btnDelete.addEventListener('click',() =>{
            myLibrary.myBooks.splice(arrayIndex,1)
            tableBody.innerHTML='';
            fillTable();

        })
        deleteCell.appendChild(btnDelete);
        bookROW.appendChild(deleteCell);
    
        const changeStatusCell = document.createElement('td');
         let btnChangeStatus = document.createElement('input');
            btnChangeStatus.type= 'button';
            btnChangeStatus.className = 'btnChangeStatus';
            btnChangeStatus.value = 'Change Status';

              btnChangeStatus.addEventListener('click', ()=>{

                if(bookStatus === 'read'){
                    
                    myLibrary.myBooks[index].status = 'not read';
                }
                else{
                    myLibrary.myBooks[arrayIndex].status = 'read';
                }
                tableBody.innerHTML='';
                fillTable();
            })
        changeStatusCell.appendChild(btnChangeStatus);
        bookROW.appendChild(changeStatusCell);
    


        tableBody.appendChild(bookROW);


        
        
    }

}

newBookBtn.addEventListener('click', (e)=>{

  
    //Our form is in a diaglog element that is set to hidden by default.
    // In order to display it this is all we need.
    diag.showModal();
});

function getTableRowInfo(){

    // let mybooks = myLibrary.myBooks;
    // console.log(mybooks);
    myLibrary.myBooks.forEach((bookDetail, index)  => {
       
        createTableRow(bookDetail.id, bookDetail.name, bookDetail.author, bookDetail.pages, bookDetail.status, index)
    //    console.log(" THe length of mybooks"+myLibrary.myBooks.length);


    });


}
function createTableRow(bookID, bookName, bookAuthor, bookPages, bookStatus, index){

    const row = new tableRows(bookID, bookName, bookAuthor, bookPages, bookStatus, index);
    
}

function getFormDetails(){

    let getFormTitle = document.getElementById('Title').value;
    let getFormAuthor = document.getElementById('Author').value;
    let getFormPages = document.getElementById('Pages').value;
    let getFormStatus = document.getElementById('Status').value;

    

    const newBook = new myBook(getFormTitle, getFormAuthor, getFormPages, getFormStatus);

    getFormTitle = document.getElementById('Title').value = '';
    getFormAuthor = document.getElementById('Author').value = '';
    getFormPages = document.getElementById('Pages').value = '';
    getFormStatus = document.getElementById('Status').value = '';

}


function fillTable(){
    
   
    getTableRowInfo();
}

function controlDisplayOfTable(){
   
    
   
        myTable.style.display = 'block';
        tableBody.innerHTML='';
        getTableRowInfo();
        alreadyDisplay = true;
    
    


}

btnCancel.addEventListener('click',()=>{

    let getFormTitle = document.getElementById('Title').value ='';
    let getFormAuthor = document.getElementById('Author').value ='';
    let getFormPages = document.getElementById('Pages').value ='';
    let getFormStatus = document.getElementById('Status').value ='';

    
    diag.close();



})


btnDisplay.addEventListener('click', controlDisplayOfTable);



submitBtn.addEventListener('click', (e)=>{

    // alert('STOP');
    //There was an issue that the submit button on our form would cause.
    //Its gone, but still kept this for now.




    getFormDetails();
   
    diag.close();
    controlDisplayOfTable();
    // fillTable();


    e.stopImmediatePropagation();
    e.preventDefault();

    

});