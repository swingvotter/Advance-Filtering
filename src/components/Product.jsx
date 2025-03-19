import "../style/product.css"


function Product({getProducts}) {
 

    return (
    <main>
      {getProducts.length > 0 && getProducts ? getProducts.map((prod,index)=>{
        return <div className="product-card" key={index}>
        <img src={prod.img} alt="product" />
        <h2>{prod.title}</h2>
        <p className="rating">{prod.reviews}</p>
        <p className="price">
            <span>
            <del>{prod.prevPrice}</del> ${prod.newPrice}
            </span>
        </p>
      </div>})
      :(<p>no product available</p>)
      }
    </main>
  )
}



export default Product
