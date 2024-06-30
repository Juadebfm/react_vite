import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  //load cart data from local storage when component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  //save cart data to local storage when component mount
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // total of the user selection
  useEffect(() => {
    const total = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.amount,
      0
    );
    setTotal(total);
  }, [cart]);

  // Total amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount,
        0
      );
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      //   --->>>>>> ********** Check later for issues - Error Check 1A --->>>>>> "[...cart]" if wrong, remove destruction **********
      const newCart = [...cart].map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      //   --->>>>>> ********** Check later for issues - Error Check 2A --->>>>>> suggests "...item" **********
      setCart([...cart, newItem]);
    }
  };

  // remove cart item
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase the amount (number) of items selected
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // opposite of above
  const reduceAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
      );
      setCart(newCart);
    }

    // comeback to this code - reduce to 1
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        reduceAmount,
        increaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
