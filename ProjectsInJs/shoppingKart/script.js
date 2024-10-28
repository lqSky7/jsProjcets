document.addEventListener("DOMContentLoaded", () => {
    const productlisthtml = document.getElementById("product-list")
    const cartitemshtml = document.getElementById("cart-items")
    const emptycarthtml = document.getElementById("empty-cart")
    const carttotalhtml = document.getElementById("cart-total")
    const totalpricehtml = document.getElementById("total-price")
    const checkoutbtnhtml = document.getElementById("checkout-btn")

    let Kart = JSON.parse(localStorage.getItem("Key")) || [];

    function updateDisplay(arr){
        cartitemshtml.innerHTML = ""
        let suma =0 
        arr.forEach(element => {
        const k = document.createElement("div")
        k.innerHTML = `<span>${element.name}, ${element.price}Rs.</span>`
        cartitemshtml.appendChild(k)
        suma = suma + Number(element.price)
        });
        totalpricehtml.innerText=suma
    }

    if(Kart != []){
    emptycarthtml.className= "hidden"
    carttotalhtml.className = ""
    updateDisplay(Kart);}

    const prodlist = [
        {id: 1, name: "product 1", price: 10},
        {id: 2, name: "product 2", price: 102},
        {id: 3, name: "product 3", price: 12}
    ]

    //Inject product list into html. 
    prodlist.forEach(element => {
        // steps: create some div for list inside prodlisthtml. Then we add button and some span inside that div. then we attach that div to our main html
        // note that const objects can be modified.
        const productul = document.createElement("ul")
        const product = document.createElement("li")
        product.innerHTML = `
        <span>${element.name} - ${element.price}Rs.</span>
        <span>⠀</span>
        <button class="buttonn" id=${element.id}>Add to Kart</button>
        <span>⠀</span> 
        <button class="rmbutton" id="${element.id}">Remove</button>`
        // this is Braille blank character, not your regular whitespace

        // add styling to unordered list from css.
        productul.className = "product"
        product.style.cssText = "display: flex; justify-content: space-between;";        productlisthtml.appendChild(productul)
        productul.appendChild(product)


        // listen to button clicks
        const AddtoKartBtn = product.addEventListener("click", (e) => {
           if(e.target.className === "buttonn"){      
            emptycarthtml.className= "hidden"
            carttotalhtml.className = ""
            const ourclickedItemID = e.target.getAttribute("id")
            // console.log(ourclickedItemID);
            prodlist.forEach(element => {
                if(Number(ourclickedItemID) === Number(element.id)){
                    Kart.push(element);
                    localStoragepush()
                }
            });
    }    
    updateDisplay(Kart);
})
})

checkoutbtnhtml.addEventListener("click", () => {
    alert("Checkout successfull")
    cartitemshtml.innerHTML = ""
    totalpricehtml.innerText="0Rs."
    Kart = []
    emptycarthtml.className= ""
    localStoragepush()

})

function rmv() {
    document.addEventListener("click", (e) => {
        const ourclickedItemID = e.target.getAttribute("id")
        if(e.target.className === "rmbutton"){
            console.log("test1", e.target.className);
            let a = (Kart.findIndex(({ id }) => id === Number(ourclickedItemID)));
            if(a != -1){
                console.log(a);
                Kart.splice(a,1)
                localStoragepush()
                updateDisplay(Kart);
            }
        }})
}
rmv()
function localStoragepush(){
localStorage.setItem("Key", JSON.stringify(Kart))
}
})
