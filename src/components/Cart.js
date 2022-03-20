import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Cart.css'

export default function Cart(props) {
    
    const {cartItems, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a+(c.newPrice ? c.newPrice: c.oldPrice) * c.qty, 0);
    const taxPrice = itemsPrice * 0.06;
    const shippingPrice = itemsPrice > 2000 ? 0:50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const price = (item) => item.newPrice ? item.newPrice : item.oldPrice;
    console.log(cartItems)
    const checkCartRemove = (item) =>{

       const exist = cartItems.find(x=> x.id == item.id);

       if (!exist) {
           console.log('enable button now')
       }
       else{
           console.log('item in cart')
       }

    }
    
  return (
      <div>
    <h2>Cart items</h2>
    <div>
        {cartItems.length === 0 && <div> Cart is empty</div>}
    </div>

    {cartItems.map((item) => (<div key={item.id} className='row'>
        <div className="col-2">{item.name}</div>
        <div className="col-2">
        {/* <MDBBtn className='btn add-to-cart' onClick={() => onAdd(item)} href='#'>+</MDBBtn> */}
        <MDBBtn className='btn remove-from-cart' disabled={false} onClick={() => {onRemove(item); checkCartRemove(item)}} href='#'>-</MDBBtn>
        </div>
        <div className="col-2">{item.qty} x ${price(item)}</div>
        <div className="col-1 text-right">{item.qty * price(item)}</div>
        </div>))}

        {cartItems.length !==0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-2"><strong>Total Price</strong></div>
                <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            </>
        )}
  </div>
    )
}
