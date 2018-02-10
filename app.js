
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
})


//Add Booklist

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //Create Element

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn = document.createElement('span');

    //Add Content
    deletebtn.textContent = 'delete';
    bookName.textContent = value;

    //Add Class Name(for Styles)
    deletebtn.classList.add('delete');
    bookName.classList.add('name');

    //Append DOM
    li.appendChild(bookName);
    li.appendChild(deletebtn);
    list.appendChild(li);

});

//Checkbox
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }

});

//Filter Search


const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }
        else {
            book.style.display = 'none';
        }    
    })
})


//Tabbed Content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.owndata);
        
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }
            else {
                panel.classList.remove('active');
            }
        })
    }
})















