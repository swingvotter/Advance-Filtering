import { useState } from "react"
import "../style/sidebar.css"


function Sidebar({categories,prices,colors}) {

const [category,setCategory] = useState(null)
const [price,setPrice] = useState(null)
const [color,setColor] = useState(null)

const handleChangeCategory = (e) =>{
    setCategory(e.target.value)
    categories(e.target.value)
}

const handleChangePrice = (e) =>{
    setPrice(e.target.value)
    prices(e.target.value)
}

const handleChangeColor = (e) =>{
    setColor(e.target.value)
    colors(e.target.value)
}

console.log(color);

  return (
    <aside>
        <div className="category-card">
        <h2>Category</h2>

        <div className="all-card">
        <input type="radio" onChange={handleChangeCategory} name={"category"} value={"All-category"} checked={category==="All-category"} />
        <label>All</label>
        </div>

        <div className="sneakers-card">   
        <input type="radio" onChange={handleChangeCategory} name={"category"} value={"Sneakers"} checked={category==="Sneakers"} />
        <label>Sneakers</label>
        </div>

        <div className="flats-card">    
        <input type="radio" onChange={handleChangeCategory} name={"category"} value={"Flats"} checked={category==="Flats"} />
        <label>Flats</label>
        </div>
        
        <div className="sandals-card">    
        <input type="radio" onChange={handleChangeCategory} name={"category"} value={"Sandals"} checked={category==="Sandals"} />
        <label>Sandals</label>
        </div>

        <div className="heels-card">    
        <input type="radio" onChange={handleChangeCategory} name={"category"} value={"Heels"} checked={category==="Heels"} />
        <label>Heels</label>
        </div>
        </div>

        {/* price begins here */}

        <div className="price-card">
        <h2>Price</h2>

        <div className="all-card">
        <input type="radio" onChange={handleChangePrice} name={"price"} value={"All-price"} checked={price==="All-price"} />
        <label>All</label>
        </div>

        <div className="0-50-card">   
        <input type="radio" onChange={handleChangePrice} name={"price"} value={"0-50"} checked={price==="0-50"} />
        <label>$0-50</label>
        </div>

        <div className="50-100-card">    
        <input type="radio" onChange={handleChangePrice} name={"price"} value={"50-100"} checked={price==="50-100"} />
        <label>$50-100</label>
        </div>
        
        <div className="100-150-card">    
        <input type="radio" onChange={handleChangePrice} name={"price"} value={"100-150"} checked={price==="100-150"} />
        <label>$100-150</label>
        </div>

        <div className="heels-card">    
        <input type="radio" onChange={handleChangePrice} name={"price"} value={"over-150"} checked={price==="over-150"} />
        <label>Over $150</label>
        </div>
        </div>

        {/* color begins hre */}

        <div className="color-card">
        <h2>Color</h2>

        <div className="all-card">
        <input type="radio" onChange={handleChangeColor} name={"color"} value={"All-color"} checked={color==="All-color"} />
        <label>All</label>
        </div>

        <div className="black-card">   
        <input type="radio" onChange={handleChangeColor} name={"color"} value={"Black"} checked={color==="Black"} />
        <label>Black</label>
        </div>

        <div className="blue-card">    
        <input type="radio" onChange={handleChangeColor} name={"color"} value={"Blue"} checked={color==="Blue"} />
        <label>Blue</label>
        </div>
        
        <div className="red-card">    
        <input type="radio" onChange={handleChangeColor} name={"color"} value={"Red"} checked={color==="Red"} />
        <label>Red</label>
        </div>

        <div className="green-card">    
        <input type="radio" onChange={handleChangeColor} name={"color"} value={"Green"} checked={color==="Green"} />
        <label>Green</label>
        </div>

        <div className="white-card">    
        <input type="radio" onChange={handleChangeColor} name={"color"} value={"White"} checked={color==="White"} />
        <label>White</label>
        </div>

        </div>

    </aside>
  )
}

export default Sidebar
