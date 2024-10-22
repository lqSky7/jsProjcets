const taskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");


let TaskList = []

// grab text when todoInput is pressed.
taskButton.addEventListener("click", () => {
    textGivenByUser = todoInput.value.trim()
    if(textGivenByUser === "") {return;}

    const DataToPush_toTasklist = {
        UID: Date.now(),
        content: textGivenByUser,
        TaskCompletedStatus: false,
    }
    
    TaskList.push(DataToPush_toTasklist)    
    todoInput.value = ""

    console.log(TaskList)
})



