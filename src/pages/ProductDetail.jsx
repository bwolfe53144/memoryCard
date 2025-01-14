import { useCartContext } from "../context/CartContext";

export default function ProductDetail() {
    const {products, toggleClick, handleChange} = useCartContext();
    
    return (
      <div>
        {products.length > 0 && (
        <ul className="myCards">
            {products.map(product => (
                <li className="shopItems" key={product.id}>
                    <img className="cardPhoto" src={product.image} alt="placeholder" />
                    <div className="myTitle">{product.title}</div>
                    <div className="myPrice">${product.price.toFixed(2)}</div>
                    {<input type="number" className="quantity" value={Number(product.quantity).toString()} onChange={(event) => handleChange(event, product.id)}/>}
                    <button className="myButton" type="button" onClick={() => toggleClick(product)}>
                        {product.inCart ? "Remove" : "Add to Cart"}
                    </button>
                </li>
            ))}
        </ul>
        )}
      </div>
    );
}


