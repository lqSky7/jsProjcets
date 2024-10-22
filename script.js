let hi = document.getElementById("changeTextButton").addEventListener("click", function () {
    let hi = document.getElementById("myParagraph");
    hi.textContent  = "changed text";
})

let sec = document.getElementById("highlightFirstCity").addEventListener("click",function () {
    let sec = document.getElementById("citiesList")
    sec.firstElementChild.classList.add("highlight");


})

let ex3  = document.getElementById("changeOrder").addEventListener("click",
    function () { 
        let ex3 = document.getElementById("coffeeType")
        ex3.textContent = "nocoffeeforu";
    }
)

let ex4 = document.getElementById("addNewItem").addEventListener("click", function () 
{
    let newele = document.createElement("li")
    newele.textContent = "newelement added";
    let ex4 = document.getElementById("shoppingList").appendChild(newele)

})


let ex5 = document.getElementById("removeLastTask").addEventListener("click",function () {
    let lastele = document.getE11011101lementById("taskList")
    lastele.lastElementChild.remove()
    
})

let ex6 = document.getElementById("teaList").addEventListener("click",function(event) {
    if(event.target) {
        alert("selected "+ event.target.textContent)
    }
})

let ex10 = document.getElementById("toggleHighlight").addEventListener("click",function() {
    var ele = document.getElementById("descriptionText")
    ele.classList.toggle("highlight") 

})