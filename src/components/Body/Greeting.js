import React from 'react';
import AppleCard from '../../images/apple_card.png';
import { Nav, Navbar, NavDropdown, Image, Button } from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
import '../../App.css';

function Greeting() {
    

    return (
      <div className="container welcome mt-5">
          <div className="row appleGreeting" style={{backgroundColor: '#FFFFFF'}}>
                <div className="col ml-5 mt-3">
                    <p className="greeting">Greetings!</p>
                    <p className="text">Find your way down here to look IT <br /> gadgets. Fresh start with new faces of <br />Technology.</p>
                </div>

                <div className="col">
                   <Image src={AppleCard}></Image>
                </div>
          </div>
        </div>
    );
  }
  
  export default Greeting;