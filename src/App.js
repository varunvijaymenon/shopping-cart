import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import './App.css';
import data from './data';
import { useState } from 'react';
import HeroText from './components/HeroText.js'

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map(x=> x.id === product.id ? {...exist, qty: exist.qty +1 } : x));
    }
    else {
      setCartItems([...cartItems, {...product, qty:1}]);
    }
    
  };
  const onRemove = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);

    // console.log(cartItems)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter(x=> x.id !== product.id))
    }
    else{
      setCartItems(
        cartItems.map(x=> x.id === product.id? {...exist, qty:exist.qty-1}: x)
      )
    }
  };

  
  return (
    <div className="App">
      <Header cartItems={cartItems}></Header>
      <HeroText/>
      <Main products={products} onAdd={onAdd} cartItems = {cartItems} setCartItems={setCartItems}></Main>
      <Cart cartItems = {cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
    </div>
  );
}


export default App;
