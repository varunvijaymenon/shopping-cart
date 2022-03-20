import React from 'react';
import './Item-card.css';
import { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import productImage from '../product-image.jpeg';

export default function Item_card(props) {

    const {product, onAdd, cartItems, setCartItems} = props;
    const [disable, setDisable] = useState(false); 
    
    const PriceDisplay = () => {
      return product.newPrice ? <><strike>${product.oldPrice}</strike>  ${product.newPrice}</>  : <>${product.oldPrice}</>
    }

    const RatingStars = () => {
      return product.rating ? <>{('⭐️').repeat(product.rating)}</> : <></>
    }

    const SaleTag = () => {
      return product.sale ? <MDBBadge color='black' className="position-absolute" >Sale</MDBBadge> : ''
    }

    // const checkCart = () => {
      
    //   // setCartItems([...cartItems])

    //   console.log(cartItems)

    //   // console.log(temp)
    //   const exist = cartItems.find(x=> x.id === product.id);

    //   setDisable(!disable);
  
    //     // setTemp((pre) => [...pre, product.id]);
      
    //   // if (exist) {
    //   //   setDisable(true);
    //   // }
    //   // else{
    //   //   // setTemp((pre) => [...pre, product.id]);
    //   //   setDisable(false);
        
    //   // }
    // }

    React.useEffect(() => {

      const exist = cartItems.find(x=> x.id === product.id);
  
        // setTemp((pre) => [...pre, product.id]);
      
      if (exist) {
        setDisable(true);
      }
      else{
        // setTemp((pre) => [...pre, product.id]);
        setDisable(false);
      }

    },[cartItems, product.id]);

    
  return (
    <MDBCard style={{ maxWidth: '22rem' }}>
      <div>
      <MDBCardImage src={productImage} position='top' alt='...'/>
      <SaleTag/>
      </div>
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <MDBCardText>
          <RatingStars/>
          <br></br>
          <PriceDisplay/>
        </MDBCardText>
        <MDBBtn className='add-to-cart-btn' disabled={disable} onClick={() => {onAdd(product);}} href='#'>Add to cart</MDBBtn>
        
      </MDBCardBody>
    </MDBCard>
  );
}






{/* <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={product.image} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <MDBCardText>
          ${product.price}
        </MDBCardText>
        <MDBBtn className='add-to-cart-btn' disabled={disable} onClick={() => {onAdd(product);}} href='#'>Add to cart</MDBBtn>
        
      </MDBCardBody>
    </MDBCard> */}