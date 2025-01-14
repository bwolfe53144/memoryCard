import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Contact from "../pages/Contact"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import { CartProvider } from "../context/CartContext"


function App() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </CartProvider>
    )
}

export default App;