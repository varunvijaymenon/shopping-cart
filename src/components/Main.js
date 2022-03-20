import React from 'react';
import Item_card from './Item-card';
import './Main.css'

export default function Main(props) {
    const {products, onAdd, cartItems, setCartItems} = props;

  return (
      <div className="Main-container">
      {products.map((product) => ((
      
      <Item_card key={product.id} product={product} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems}></Item_card>
      // {/* <Item_card product={'Sale Item'} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems}></Item_card> */}
      // {/* <Item_card product={'Sale Item'} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems}></Item_card> */}
      

       )))} 
      
      </div>
  )
}
