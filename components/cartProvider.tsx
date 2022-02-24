import React, { FC, useContext, useEffect, useState } from 'react';

type CartContextType = {
  cartId: string;
  count: number;
  updateCount: (id: string) => void;
};

const CartContext = React.createContext<CartContextType>({
  cartId: '',
  count: 0,
} as CartContextType);

const LS_CART_KEY = 'sc:cart-id';

const CartProvider: FC<{}> = (props) => {
  const [cartId, setCartId] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem(LS_CART_KEY) || '';

    if (!window.localStorage.getItem(LS_CART_KEY)) {
      fetch('http://localhost:8080/api/carts', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            type: 'cart',
            attributes: {},
          },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((d) => d.json())
        .then((d) => {
          setCartId(d.data.id);
        });
    } else {
      setCartId(cartIdFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LS_CART_KEY, cartId);
  }, [cartId]);

  const updateCount = (id: string) => {
    fetch(`http://localhost:8080/api/carts/${id}/items`)
      .then((d) => d.json())
      .then((d: { data: { attributes: { quantity: number } }[] }) =>
        d.data.reduce((acc, { attributes: { quantity } }) => acc + quantity, 0),
      )
      .then((d) => {
        setCount(d);
      });
  };

  useEffect(() => {
    updateCount(cartId);
  }, []);

  return (
    <CartContext.Provider value={{ cartId, count, updateCount }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
