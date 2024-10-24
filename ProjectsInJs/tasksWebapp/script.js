document.addEventListener('DOMContentLoaded',() => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");
    let ListArray = JSON.parse(localStorage.getItem("localstoragekey")) || []
    ListArray.forEach(element => {
        render(element)
    }); 

    document.addEventListener('keydown', (e) => {
        if(e.ctrlKey && e.key === 'k') { 
            e.preventDefault();  
            todoInput.focus(); 
        }
    });

    addTaskButton.addEventListener("click",() => {
        handleTaskAddition()
    });

    todoInput.addEventListener("keydown",(e) => {
        if (e.key === "Enter"){
        handleTaskAddition();
        }})
    
        

        function handleTaskAddition(){
            if(todoInput.value.trim() === "") {
                return; // dont add empty stuff to takslist
            }
        
        const taskData = {
            UID: Date.now(),
            content: todoInput.value.trim(),
            completed: false
        }
        ListArray.push(taskData)
        todoInput.value = "";
        render(taskData)
        pushLocal()
    }

    function render(arrayitem){
        const li = document.createElement("li"); 
        li.id = arrayitem.UID;
        li.innerHTML = `
        <span>${arrayitem.content}</span>
        <button>Delete</button>
        `;
        todoList.appendChild(li);
    
        
        //toggle
        li.addEventListener('click',(e) => 
        {
            if(e.target.tagName != "BUTTON"){
                   arrayitem.completed = !arrayitem.completed;
                   li.classList.toggle("completed");
                   pushLocal();
            }
        })    
        
        // deletion code:
        li.addEventListener('click', (e) => {
            e.stopPropagation();
            if(e.target.tagName === "BUTTON"){
                ListArray = ListArray.filter(k => k.UID !== arrayitem.id);
                li.remove()
                pushLocal();
            }
            

        })





        
    }




    function pushLocal() {
        localStorage.setItem("localstoragekey", JSON.stringify(ListArray));
    }


})