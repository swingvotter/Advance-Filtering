import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Recommended from "./components/Recommended"
import Sidebar from "./components/Sidebar"
import product from "../data/clothes"



function App() {

const [searchInput,setSearchInput] = useState("")
const [buttonText,setButtonText] = useState(null)
const [categoryInput,setCategoryInput] = useState(null)
const [priceInput,setPriceInput] = useState(null)
const [colorInput,setcolorInput] = useState(null)
const [filteredItem,setFilteredItem] = useState("")

const handleSearch = (value) => {
  setSearchInput(value)
}

const handleButtonFilter = (value) =>{
  setButtonText(value==="All Products"?null:value)
}

const handleAllRadioInput = (value) => {
  // Separate category, price, and color handling
  if (value === "All-category" || value === "Sneakers" || value === "Flats" || value === "Sandals" || value === "Heels") {
    setCategoryInput(value === "All-category" ? null : value); // Handle category input separately
  } else if (value === "All-price" || value === "0-50" || value === "50-100" || value === "100-150" || value === "over-150") {
    setPriceInput(value === "All-price" ? null : value); // Handle price input separately
  } else if (value === "All-color" || value === "Black" || value === "Blue" || value === "Red" || value === "Green" || value === "White") {
    setcolorInput(value === "All-color" ? null : value); // Handle color input separately
  }
};


useEffect(() => {
  const searchMatches = searchInput
    ? product.filter((prod) =>
        prod.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : product;

  const buttonMatches = buttonText
    ? searchMatches.filter(
        (prod) => prod.company.toLowerCase() === buttonText.toLowerCase()
      )
    : searchMatches;

  const categoryMatches = categoryInput
    ? buttonMatches.filter(
        (prod) => prod.category.toLowerCase() === categoryInput.toLowerCase()
      )
    : buttonMatches;

 
  const priceMatches = priceInput
    ? categoryMatches.filter((prod) => {
        const price = parseFloat(prod.newPrice); // Ensure it's a number

        if (priceInput === '0-50') {
          return price >= 0 && price <= 50;
        } else if (priceInput === '50-100') {
          return price > 50 && price <= 100;
        } else if (priceInput === '100-150') {
          return price > 100 && price <= 150;
        } else if (priceInput === 'over-150') {
          return price > 150;
        } else {
          return true; // If no price filter is selected, return all products
        }
      })
    : categoryMatches;

    const colorMatches = colorInput ? (priceMatches.filter((prod)=>
    prod.color.toLowerCase()
    ===
    colorInput.toLowerCase()))
    :(priceMatches)


  setFilteredItem(colorMatches);
}, [searchInput, buttonText, categoryInput, priceInput,colorInput]);


  return (
    <>
      <Navbar onchangeInput={handleSearch}/>    
      <Recommended buttonFilter={handleButtonFilter}/>    
      <Sidebar categories={handleAllRadioInput} prices={handleAllRadioInput} colors={handleAllRadioInput}/>    
      <Product getProducts={filteredItem}/>    
    </>
  )
}

export default App
