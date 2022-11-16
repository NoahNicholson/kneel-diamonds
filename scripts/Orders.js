import { getOrders, getSizes, getStyles } from "./database.js"
import { getMetals } from "./database.js"


const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

// Remember that the function you pass to find() must return true/false





const buildOrderListItem = (order) => {


    const foundMetal = metals.find(
        (metal) => {
               return metal.id === order.metalId 
        }  
    )
   
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const totalCost = foundMetal.price + foundStyle.price + foundSize.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    //found sizes and found styles. define them, then add them to totalCost

    return `<li>
        order #${order.id} was placed on ${order.timestamp} and costs ${costString}.
    </li>`
}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
        Me- the orders will be created as the customer clicks the button. There is not a huge current database
        of orders in existence?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem) //doesnt this function need an argument??

    html += listItems.join("")
    html += "</ul>"

    return html
}
