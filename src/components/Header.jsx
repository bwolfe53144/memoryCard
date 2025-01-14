import { Link } from "react-router-dom";
import './App.css';

function Links({cartItemsCount}) {

    return (
      <ul className="header">
        <div className="leftHeader">
            <Link to = "/">
              Home
            </Link>  
            <Link to = "/shop">
              Shop
            </Link> 
            <Link to = "/contact">
              Contact 
            </Link> 
        </div>
        <div className="headerCart">
            <Link to="/cart">          
            <img className="cart" src="/images/shopping-cart.svg" alt="" /> 
            </Link>
            <Link className="cartCount" to="/cart">          
            {cartItemsCount}
            </Link>
        </div>
      </ul>
    );
  }
  
  export default function Header({cartItemsCount}) {
    return (
      <header>
        <nav>
          <Links cartItemsCount={cartItemsCount} />
        </nav>
      </header>
    );
  }