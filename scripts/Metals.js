import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    // Use .map() for converting objects to <li> elements
    const listItem = metals.map(metal => {

        html += `<li>
        <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
    </li>`

    })
    html += listItem.join("")  //joins the items in the array into one string
    html += "</ul>"
    return html
}
