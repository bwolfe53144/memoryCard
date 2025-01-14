import Header from "../components/Header"
import { useCartContext } from "../context/CartContext";

export default function Home() {
    const {cartItems} = useCartContext();

    return (
        <div className="home">
            <Header cartItemsCount={cartItems.reduce((total, currentItem) => {
                return total + currentItem.quantity;
                }, 0)} />
            <div className="title">Harbor Heights Department Store</div>
            <img src="images/deptstorephoto.jpeg" alt="" />
            <h2>Welcome to Harbor Heights – Where Style Meets Value</h2>

            <p>Discover the ultimate shopping destination for all your lifestyle needs. At Harbor Heights, 
               we’re dedicated to bringing you a diverse selection of high-quality products, from fashion-forward 
               apparel to home essentials that inspire. Our carefully curated collections are designed to meet the 
               dynamic needs of modern living, ensuring you find everything you need under one roof.</p>

            <h2>Your One-Stop Shop for Every Occasion</h2>

            <p>Whether you're refreshing your wardrobe, upgrading your home, or looking for the perfect gift, Harbor 
               Heights has you covered. Explore our wide range of clothing for the whole family, stylish footwear, and 
               accessories that make a statement. Don’t miss our home and décor section, featuring timeless designs and 
               the latest trends to elevate your living spaces.</p>

            <h2>Unbeatable Deals, Unmatched Convenience</h2>

            <p>Enjoy an unparalleled shopping experience with exclusive promotions, loyalty rewards, and convenient shopping options. 
               From in-store visits to seamless online browsing, we’re committed to making your experience hassle-free and enjoyable. 
               With fast shipping and easy returns, satisfaction is always guaranteed.</p>

            <h2>Experience Exceptional Service</h2>

            <p>At Harbor Heights, we’re more than just a department store. We’re a community that values quality, affordability, and 
                exceptional service. Our friendly staff is here to assist you every step of the way, ensuring you leave with a smile. 
                Thank you for choosing us as your trusted destination for all things lifestyle.</p>

            <p>Ready to explore? Start shopping now and discover why Harbor Heights is the ultimate choice for savvy shoppers everywhere.</p>
        </div>
    )

}