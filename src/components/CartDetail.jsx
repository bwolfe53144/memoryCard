import { useCartContext } from "../context/CartContext";

export default function CartDetail() {
    const { cartItems, toggleClick, handleChange} = useCartContext();

    return (
        <div>
            {cartItems.length > 0 && (
            <ul className="myCards">
                {cartItems.map(item => (
                    <li className="shopItems" key={item.id}>
                        <img className="cardPhoto" src={item.image} alt="placeholder" />
                        <div className="myTitle">{item.title}</div>
                        <div className="myPrice">${item.price.toFixed(2)}</div>
                        {<input type="number" className="quantity" value={Number(item.quantity).toString()} onChange={(event) => handleChange(event, item.id)}/>}
                        <button className="myButton" type="button" onClick={() => toggleClick(item)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
  }