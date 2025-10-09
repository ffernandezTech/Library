

const mainDisplay = document.querySelector('.mainContainer');


// Elements that we need to get in order to add a new book
const newBookBtn = document.getElementById('CreateBook');
const submitBtn = document.querySelector('.submitBtn');
const diag = document.querySelector('dialog');
const myform = document.getElementById('bookEntry');
const myFormCss = window.getComputedStyle(myform);


// elements are need to get in order to display out current library.
const btnDisplay = document.getElementById('DisplayLibrary');
const myTable = document.querySelector('table');
//Dont think this compute style is required.
const myTableCss= window.getComputedStyle(myTable);
const tableBody = document.querySelector('tbody');





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

Book.prototype.changeStatus = function(){

    // console.log('prototype');

    if(this.status ==='read')
    {
        return this.status = 'reading';
    }
    else if(this.status === 'reading')
    {
        return this.status = 'read';
    }
}

function addBookToLibrary(name, author, pages, status){

    let entry = new Book(name, author, pages, status);
    myLibrary.push(entry);

    

}

addBookToLibrary('Eragon', 'Christopher Paolini', 450, 'read');
addBookToLibrary('Marsfield Park', 'Jane Austen', 500, 'reading');
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 500, 'read');



newBookBtn.addEventListener('click', (e)=>{

  
    //Our form is in a diaglog element that is set to hidden by default.
    // In order to display it this is all we need.
    diag.showModal();
});



function fillTable(){

    myTable.style.display = 'block';
         myLibrary.forEach( (item , index) =>{
          
            // console.log(myLibrary.length)

            // console.log(myLibrary);


            const row = document.createElement('tr');

            //Maybe a css code of nth child would have been better to do this instead of how I did.
            row.setAttribute('id', 'row'+ index);
            if(index%2 !== 0)
            {
                row.setAttribute('style', 'background:lightblue');


            }
            else if(myLibrary.length<2 && index === 1)
            {
                row.setAttribute('style', 'background:lightblue');
            }


            
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

            const cell6 = document.createElement('td');
            let btn = document.createElement('input');
            btn.type= 'button';
            btn.className = 'btn'+index;
            btn.value = 'Delete';
        
            btn.addEventListener('click', () =>{


                // console.log(myLibrary[index]);
                myLibrary.splice(index,1)
                // console.log(myLibrary[index]);
            //   tableBody.deleteRow(index);


            //This works, but I dont like it. Basically clearning and recreating
            //The whole table with the changes made...
              tableBody.innerHTML='';
              fillTable();

            //   console.log(index);
                


                
                // alert('hello ' + index);


            })
            cell6.appendChild(btn);
            row.appendChild(cell6);


            const cell7 = document.createElement('td');
            let btn2 = document.createElement('input');
            btn2.type = 'button';
            btn2.className ='btn2-'+index;
            btn2.value = 'Change Status';
            btn2.addEventListener('click', ()=>{

                // console.log(item.name);
                item.changeStatus();

                // console.log(myLibrary[index]);

                tableBody.innerHTML='';
                fillTable();
            })


            cell7.append(btn2);
            row.appendChild(cell7);


            



         

            tableBody.appendChild(row);
        });

       


}

function getFormDetails(){

    const getFormTitle = document.getElementById('Title').value;
    const getFormAuthor = document.getElementById('Author').value;
    const getFormPages = document.getElementById('Pages').value;
    const getFormStatus = document.getElementById('Status').value;


    addBookToLibrary(getFormTitle, getFormAuthor, getFormPages, getFormStatus);



    // console.log(`${getFormTitle} and ${getFormAuthor} and ${getFormPages} and ${getFormStatus}`);



}







btnDisplay.addEventListener('click', fillTable);


submitBtn.addEventListener('click', (e)=>{

    // alert('STOP');
    //There was an issue that the submit button on our form would cause.
    //Its gone, but still kept this for now.


    getFormDetails();
    tableBody.innerHTML='';
    diag.close();
    fillTable();


    e.stopImmediatePropagation();
    e.preventDefault();

    

});