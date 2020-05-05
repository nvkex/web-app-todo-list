const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
var list = document.querySelector('.todos');

//Generate a list node for the new task that user enters
const generateTemplate = task => {
    const html = '<li class = "list-group-item d-flex justify-content-between align-items-center"><span>'+task+'</span><i class = "far fa-trash-alt delete"></i></li>';
    
    //append to the ul list items
    list.innerHTML += html;

}

//Submit new task when user presses enter
addForm.addEventListener('submit',(e) => {
    e.preventDefault();
    
    /**
     * Get the string entered by user in the input box
     * Remove white spaces entered by the user
     */
    const todo = addForm.add.value.trim();

    /**
     * Check for empty string
     * Do nothing when user sumbits an empty string
     */
    if(todo.length!=0)
        generateTemplate(todo);

        //clear the input boxes
        addForm.reset();
});

/**
 * Deleting a task from list
 * Listen to click event inside ul
 * If the clicked object contains a 'delete' class
 * Remove the parent Element i.e, the list the was to be deleted.
 */
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

/**
 * Live searching and updating list
 * Remove white spaces from the keyword and covert ot lowercase
 * Filter list items that doesnt match and add 'filtered' to their classList that set their display to hidden
 * List items that match has their 'filtered' class removed from classList
 */
const filterTasks = (term) =>{
    Array.from(list.children)
        .filter((task) => !task.textContent.toLowerCase().includes(term))
        .forEach((task) => task.classList.add('filtered'));

        Array.from(list.children)
        .filter((task) => task.textContent.toLowerCase().includes(term))
        .forEach((task) => task.classList.remove('filtered'));

}
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTasks(term);
});