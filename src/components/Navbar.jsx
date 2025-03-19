import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../style/navbar.css"
import { useState } from "react";



function Navbar({onchangeInput}) {
 
const [inputVlaue,setInputValue] = useState("") 


const handleSearch = (e)=>{
    setInputValue(e.target.value)
    onchangeInput(e.target.value)
}

    return (
    <nav>
        <div className="single-icon-card">
        <LuShoppingCart className="cart-icon"/>            
        </div>

        <div className="input-icons-card">
        <div className="input-card">
            <input type="text" 
            placeholder="search items"
            onChange={handleSearch}
            value={inputVlaue}
            />
        </div>
        <div className="icons-card">
            <FaHeart />
            <MdShoppingCart />
            <FaRegUser />
        </div>
        <GiHamburgerMenu className="hamburger"/>
        </div>
    </nav>
  )
}

export default Navbar
