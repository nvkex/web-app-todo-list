const addForm = document.querySelector('.add');
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
    
    //Get the string entered by user in the input box
    //Remove white spaces entered by the user
    const todo = addForm.add.value.trim();

    //Check for empty string
    //Do nothing when user sumbits an empty string
    if(todo.length!=0)
        generateTemplate(todo);

        //clear the input boxes
        addForm.reset();
});