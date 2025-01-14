import Header from "../components/Header";
import { useCartContext } from "../context/CartContext";

export default function Contact() {
    const {cartItems} = useCartContext();

    function handleSubmit() {
        alert('Your opinion is of the upmost importance! We will get back to you as soon as possible!');
    }
    
    return (
        <div>
            <Header cartItemsCount={cartItems.reduce((total, currentItem) => {
                return total + currentItem.quantity;
            }, 0)} />
            <h1>Contact Us</h1>
            <div>
                <p><strong>Address:</strong> 123 Main Street, Downtown Kenowhere, WI 45678</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> support@harborheights.com</p>
                <p><strong>Customer Service Hours:</strong> Monday - Saturday: 9 AM - 8 PM | Sunday: 10 AM - 6 PM</p>
            </div>
            <form className="contactInfo" onSubmit={() => handleSubmit()}>
                <label>Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                />
                <label>Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                />
                <label>Message</label>
                <textarea
                  type="text"
                  required
                  placeholder="Enter your message"
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}