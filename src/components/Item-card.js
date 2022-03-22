import React from 'react';
import './Item-card.css';
import { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import productImage from '../product-image.jpeg';

export default function ItemCard(props) {

    const {product, onAdd, cartItems} = props;
    const [disable, setDisable] = useState(false); 
    
    const PriceDisplay = () => {
      return product.sale ? <><strike>${product.oldPrice}</strike>  ${product.newPrice}</>  : <>${product.oldPrice}</>
    }

    const RatingStars = () => {
      return product.rating ? <>{('⭐️').repeat(product.rating)}</> : <></>
    }

    const SaleTag = () => {
      return product.sale ? <MDBBadge color='black' className="position-absolute" >Sale</MDBBadge> : ''
    }


    React.useEffect(() => {

      const exist = cartItems.find(x=> x.id === product.id);
  
      if (exist) {
        setDisable(true);
      }
      else{
        setDisable(false);
      }

    },[cartItems, product.id]);

    
  return (
    <MDBCard className='card-container' style={{ maxWidth: '22rem' }}>
      <div className='top-section'>
      <MDBCardImage style={{ width: '17rem' }} src={productImage} position='top' alt='...'/>
      <SaleTag/>
      </div>
      <MDBCardBody className='bottom-section'> 
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <MDBCardText>
          <RatingStars/>
          <br></br>
          <PriceDisplay/>
        </MDBCardText>
        <MDBBtn className='add-to-cart-btn' disabled={disable} onClick={(e) => {onAdd(product); e.preventDefault();}} href='#'>Add to cart</MDBBtn>
        
      </MDBCardBody>
    </MDBCard>
  );
}
