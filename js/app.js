const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
// html template
const generTemplate = todo => {
    
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="bi bi-trash delete"></i>
        </li>
        `;

};
//add new todo
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim cuts out uneccessary white space
    
    generTemplate(todo);
});