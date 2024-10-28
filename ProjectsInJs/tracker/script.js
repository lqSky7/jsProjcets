document.addEventListener("DOMContentLoaded", () => 
{
    const expFormHtml = document.getElementById("expense-form")
    const expenseName = document.getElementById("expense-name")
    const expenseAmount = document.getElementById("expense-amount")
    const expenseList = document.getElementById("expense-list")
    const totalHtml = document.getElementById("total-amount")

    let taskListArray = JSON.parse(localStorage.getItem("key")) || []
    render(taskListArray)


    expFormHtml.addEventListener("click", (e) => {
        e.preventDefault() 
        if(e.target.tagName == "BUTTON"){

            
        const item = {
            name: expenseName.value,
            amount: expenseAmount.value,
            ID: Date.now()
        }

        taskListArray.push(item)       
        }
        pushLocal()
        render(taskListArray)
    })

function render(arr){
    expenseList.innerHTML = ``
    let sum = 0
    arr.forEach(element => {
       const k = document.createElement("li")
       k.innerHTML = `<span>${element.name} : ${element.amount} Rs</span>
       <button id="${element.ID}" class="delbtn" >Delete</button>`

       expenseList.appendChild(k)
       sum += Number(element.amount)
    });
    totalHtml.innerText=sum

}

expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delbtn")) {
        const ourclickedItemID = e.target.getAttribute("id")
        let a = taskListArray.findIndex(({ID}) => ID === Number(ourclickedItemID))
        if(a != -1){
            taskListArray.splice(a,1)
            pushLocal()
            render(taskListArray)
        }
    }
    
})

function pushLocal(){
    localStorage.setItem("key", JSON.stringify(taskListArray))
}

})