import React, { useReducer } from 'react';

// Reducer fonksiyonu
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  // useReducer'ı kullanarak state ve dispatch fonksiyonunu alıyoruz
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product) => {
    // dispatch ile action gönderiyoruz
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    // dispatch ile action gönderiyoruz
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <div>
      <h1>Alışveriş Sepeti</h1>
      <ul>
        {cartState.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - <button onClick={() => removeFromCart(item.id)}>Ürünü Sepetten Çıkar</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Ürünler</h2>
        <ul>
          <li>
            Ürün 1 - <button onClick={() => addToCart({ id: 1, name: 'Ürün 1' })}>Sepete Ekle</button>
          </li>
          <li>
            Ürün 2 - <button onClick={() => addToCart({ id: 2, name: 'Ürün 2' })}>Sepete Ekle</button>
          </li>
          {/* Daha fazla ürün ekleyebilirsiniz */}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
