import React from 'react';
import ItemCard from './Item-card';
import './Main.css'

export default function Main(props) {
    const {products, onAdd, cartItems, setCartItems} = props;

  return (
      <div className="Main-container">
      {products.map((product) => ((
      
      <ItemCard key={product.id} product={product} onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems}></ItemCard>
       )))} 
      
      </div>
  )
}
