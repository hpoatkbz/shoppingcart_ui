import React from 'react';
import logo from '../../images/logo.png';
import Fb_Signin from '../../images/FB_Signin.png';
import Google_Signin from '../../images/Google_Signin.png';
import { Nav, Navbar, NavDropdown, Image, Modal,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';

function MyVerticallyCenteredModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    

    <Modal
      {...props}
      // size="lg"
      dialogClassName="loginModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
       <Modal.Header closeButton>
         {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>  */}
      </Modal.Header>

      <LoginForm
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
      <Modal.Body>
        <div className="row justify-content-center mt-3">
            <Image src={Fb_Signin} onClick={() => setModalShow(true)}/>
        </div><br />

        <div className="row justify-content-center or">
          {/* <hr style={{width:200, backgroundColor: '#F0F6FC'}}/> */}
          OR 
          {/* <hr style={{width:200, backgroundColor: '#F0F6FC'}}/> */}
        </div><br />

        <div className="row justify-content-center mb-3">
          <Image src={Google_Signin} onClick={() => setModalShow(true)}/>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function LoginForm(props) {
  return (
    <Modal
      {...props}
      // size="lg"
      dialogClassName="loginModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
          Contact Info
        </Modal.Title> 
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="row">
            <div className="col">
                <label>Full Name</label>
                <input type="text" class="form-control" name="fullname" id="email" placeholder="Enter Fullname"/>
            </div>

            <div className="col">
                <label>Phone Number</label>
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter Phone Number"/>
            </div>
          </div><br />

          <div className="row">
            <div className="col">
                <label>Email Address</label>
                <input type="text" class="form-control" name="email" id="email" placeholder="Enter Email Address"/>
            </div>

            <div className="col">
               
            </div>
          </div><br />

          <div className="row">
            <div className="col">
                <label>State/Region</label>
                <select name="region" id="countySel" class="form-control chosen-select">
                  <option value="" selected="selected">Select</option>
                </select>
            </div>

            <div className="col">
                <label>Township</label>
                <select name="township" id="countySel" class="form-control chosen-select">
                  <option value="" selected="selected">Select</option>
                </select>
            </div>
          </div><br />

          <div className="row">
            <div className="col">
                <label>Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="addr" placeholder="Enter Address"></textarea>
            </div>
          </div><br />

          <div className="row">
            <div className="col">
                
            </div>

            <div className="col">
              <input type="submit" className="form-control saveBtn" value="Save" style={{color: '#F3F3F3', backgroundColor: '#368DB2'}}></input>
            </div>
          </div>
          
        </form>
      </Modal.Body>
    </Modal>
  );
}

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// function filterFunction() {
//   var input, filter, ul, li, a, i, div, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }


function Header() {
  const [modalShow, setModalShow] = React.useState(false);
 
    return (
        <div className="container headerSearchbar">
        <Navbar className="mx-4">
              <Navbar.Brand className="logo">
                  <Image src={logo} />
              </Navbar.Brand>
          
              <Nav className="searchBox col-6" >
                <div className="input-group input-sm input-group-lg myDropdown">
                  <input className="form-control" type="text" id="myInput"  placeholder="What are you looking for?" aria-label="Search" />
                    <div className="input-group-prepend">
                      <span className="input-group-text rounded-right">
                        <ion-icon name="search-outline"></ion-icon>
                      </span>
                    </div> 
 
                </div>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Nav>
           
              <Nav className="pl-4">
                    <ion-icon name="heart-outline" size="large" ></ion-icon>
              </Nav>

              <Nav className="pl-4">
                    <ion-icon name="cart-outline" size="large" ></ion-icon>
              </Nav>

              <Nav className="pl-4">
                      <button type="button" onClick={() => setModalShow(true)} className="btn d-flex flex-row justify-content-center loginBtn border border-3">
                      <span className="loginBtnText pt-1">Log in</span>
                        <span className="pt-2 pl-1"><ion-icon name="person-sharp" size="small"></ion-icon></span>
                    </button>  
              </Nav>
 
        </Navbar>
        <Navbar className="mx-3">

          <NavDropdown title="Mobile" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Andriod</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">iOS</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Laptop" id="basic-nav-dropdown" className="pl-4">
            <NavDropdown.Item href="#action/3.1">Acer</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Dell</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Lenovo</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">MSI</NavDropdown.Item>
          </NavDropdown>

        <NavDropdown title="Desktop" id="basic-nav-dropdown" className="pl-4">
            <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">GPU</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">RAM</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Motherboard</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">SSD</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">HDD</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Power Supply</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Casing</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">Fan</NavDropdown.Item><NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">UPS</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="TV" id="basic-nav-dropdown" className="pl-4">
          <NavDropdown.Item href="#action/3.1">AndriodTV</NavDropdown.Item><NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">SmartTV</NavDropdown.Item><NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">StandardTV</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Mouse" id="basic-nav-dropdown" className="pl-4">
          <NavDropdown.Item href="#action/3.1">Standard Mouse</NavDropdown.Item><NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Gaming Mouse</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Keyboard" id="basic-nav-dropdown" className="pl-4">
          <NavDropdown.Item href="#action/3.1">Standard Keyboard</NavDropdown.Item><NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Gaming Keyboard</NavDropdown.Item>
        </NavDropdown>

        <Navbar className="pl-4">Headphone</Navbar>

        <Navbar className="pl-4">Accessories</Navbar>
         
        </Navbar>
        <hr />
        </div>
     
    );
  }
  
  export default Header;