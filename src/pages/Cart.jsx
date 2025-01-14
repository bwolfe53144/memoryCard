import Header from "../components/Header";
import CartDetail from "../components/CartDetail";
import './App.css';
import { useCartContext } from "../context/CartContext";


export default function Cart() {
  const {cartItems} = useCartContext();
  const cartCost = (cartItems.reduce((total, currentItem) => {
    return total + currentItem.quantity * currentItem.price;
  }, 0)).toFixed(2);

  return (
    <>
        <Header cartItemsCount={cartItems.reduce((total, currentItem) => {
            return total + currentItem.quantity;
            }, 0)} />
        <div className="title">Checkout</div>
        <h2>{cartItems.length == 0 ? 'There are no items in your cart!' : `Your total is $${cartCost}` }</h2>
        <h3>{cartItems.length > 0 && `Items:` }</h3>
        <CartDetail />
    </>
  );
}
