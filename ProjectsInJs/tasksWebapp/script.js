document.addEventListener('DOMContentLoaded', () => {
const taskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

// we always want to read local storage and update tasklist for website using local data.
let TaskList = JSON.parse(localStorage.getItem('keyforpushData_toLocal')) || []   // if no data locally then || sets array to empty...
TaskList.forEach(element => {
    rendertask(element)
});


// grab text when todoInput is pressed.
taskButton.addEventListener("click", () => {
    textGivenByUser = todoInput.value.trim()
    if(textGivenByUser === "") {return;}

    const DataToPush_toTasklist = {
        UID: Date.now(),
        content: textGivenByUser,
        TaskCompletedStatus: false,
    }
    

    // function to push data to local storage.
    function pushData_toLocal() {
        localStorage.setItem("keyforpushData_toLocal", JSON.stringify(TaskList));
    }

    TaskList.push(DataToPush_toTasklist)    
    todoInput.value = ""
    pushData_toLocal()
    console.log(TaskList)
})

function rendertask(list){
    console.log(list)
}


})