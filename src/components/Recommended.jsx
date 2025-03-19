import { useState } from "react"
import "../style/recommended.css"

function Recommended({buttonFilter}) {

const [buttonText,setButtonText] = useState("")

const handleClick = (e) => {
    setButtonText(e.target.innerText)
    buttonFilter(e.target.innerText)
}

console.log(buttonText);

  return (
    <section>
            <h2>Recommended</h2>
        <div className="buttons-card">
            <button onClick={handleClick}>All Products</button>
            <button onClick={handleClick}>Nike</button>
            <button onClick={handleClick}>Adidas</button>
            <button onClick={handleClick}>Puma</button>
            <button onClick={handleClick}>Vans</button>
        </div>
    </section>
  )
}

export default Recommended
