const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');// ul
const search = document.querySelector('.search input')


// html template
const generTemplate = todo => {
    
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="bi bi-trash delete"></i>
        </li>
        `;
    list.innerHTML += html;
};                 // appends

//add new todo
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim cuts out uneccessary white space
    
    // check if 'if' has length
    if (todo.length) {
      generTemplate(todo);
      addForm.reset();  //for forms we query on the DOM, clears forms
    }
});

//delete todos
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});


const filterTodos = (term) => {  // outside of event in order to use it elsewhere
    Array.from(list.children)
        .filter((todo => !todo.textContent.includes(term)) //searches term to see if it passes check
        .forEach(() => todo.classList.add('filtered')));
};

// one way to filter |  keyup event
search.addEventListener('keyup', () =>{
    const term = search.value.trim();
    filterTodos(term);
});