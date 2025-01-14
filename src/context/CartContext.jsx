import {createContext, useState, useContext, useEffect} from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products?limit=20')
          .then(response => {
            return response.json()
          })
          /*Use map to set quantity to 0 and inCart to false on all items*/
          .then(products => {
            setProducts(products.map(object => {
              return {...object, inCart: false, quantity:0};
            }))
          })
      }
      useEffect(() => {
        fetchData()

      }, [])

      function handleChange(event, id) {
        if (event.target.value > -1) {
        setProducts(
          products.map((product) => {
            if (product.id === id) {
              return {...product, quantity: Number(event.target.value)};
            } else {
              return product;
            }
          })
        );
        setCartItems(
          cartItems.map((item) => {
            if (item.id === id) {
              return {...item, quantity: Number(event.target.value)};
            } else {
              return item;
            }
          })
        );
      }
      if (event.target.value == 0) {
        setProducts(
          products.map((product) => {
            if (product.id === id) {
              return {...product, quantity: 0, inCart: false};
            } else {
              return product;
            }
          })
        );
        setCartItems(cartItems.filter((t) => t.id !== id));
      }
    };
    
    const toggleClick = (item) => {
        // logic to add to cart
        if (item.inCart == false && item.quantity == 0) {
          setProducts(
            products.map((product) => {
              if (product.id === item.id) {
                return {...product, quantity: 1, inCart: true};
              } else {
                return product;
              }
            })
          );
          setCartItems([...cartItems, {
            quantity: 1,
            image: item.image,
            price: item.price,
            title: item.title,
            id: item.id,
            inCart: true,
          }])
        } else if (item.inCart == false) {
          setProducts(
            products.map((product) => {
              if (product.id === item.id) {
                return {...product, inCart: true};
              } else {
                return product;
              }
            })
          );
          setCartItems([...cartItems, {
            quantity: item.quantity,
            image: item.image,
            price: item.price,
            id: item.id,
          }])
        } else if (item.inCart == true) {
        //logic to remove from the cart
            setCartItems(cartItems.filter((t) => t.id !== item.id));
            setProducts(
              products.map((product) => {
                if (product.id === item.id) {
                  return {...product, inCart: false, quantity: 0};
                } else {
                  return product;
                }
              })
            );
        }
      };

    const value = {
        products,
        cartItems,
        handleChange,
        toggleClick
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}