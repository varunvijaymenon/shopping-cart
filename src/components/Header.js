import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';
import './Header.css';

export default function Header({cartItems}) {
  const [showNav, setShowNav] = useState(false);
  const totalQty = cartItems.reduce((a,c) => a + c.qty, 0);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
          <MDBNavbarNav>
          <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Shop</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn outline size="md" type='button' className="Cart-btn" color="dark">
              <div className="Cart-icon">
              <MDBIcon fas icon='shopping-cart'/>
              </div>
              <div> Cart </div>
              <div className="Cart-count">
              <MDBBadge pill color='danger'>{totalQty}</MDBBadge>
              </div>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}