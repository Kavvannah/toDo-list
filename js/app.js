const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');// ul


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
    
    // check if has length
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