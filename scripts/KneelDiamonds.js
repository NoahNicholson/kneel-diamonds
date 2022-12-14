import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"

// document.addEventListener(
//     "click",
//     (event) => {
//     }
// )


//Does this need to be in this module or in main.js module??
const eventHub = document.querySelector("#container");
eventHub.addEventListener("click", (event) => {
    const buttonClicked = event.target       
    if (buttonClicked.id === "orderButton") {
        addCustomOrder()
    }
    
}
)

//.target a property on the event object, 
//event object is all the data associated with that event and the element it came from
//elements current inner text, id, etc....
//generated by the browser


export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}