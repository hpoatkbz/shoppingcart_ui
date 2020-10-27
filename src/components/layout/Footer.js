import React from 'react';
import MPU from '../../images/MPU.png';
import cash from '../../images/cash.png';
import kbzpay from '../../images/kbzpay.png';
import visa from '../../images/visa.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import { Image } from 'react-bootstrap';
import '../../App.css';

function Footer() {
    return (
        
    <div className="footer">
         <div className=" d-flex">
            {/* <div className="row"> */}
                <div className="col-5 ml-5">
                        <p className="contactUs">Contact us</p>
                        <p><ion-icon name="call"></ion-icon><span className="ml-2 phoneMail">09963721938</span></p>
                        <p><ion-icon name="call"></ion-icon><span className="ml-2 phoneMail">09974717543</span></p>
                        <p><ion-icon name="mail"></ion-icon><span className="ml-2 phoneMail">it.merchant.mm@gmail.com</span></p>
                    </div>

                    <div className="col-4">
                        <p className="paymentUs">Payment Methods</p>
                        <div>
                        <Image src={cash}/>
                        <Image src={kbzpay} className="ml-5"/><br /><br />
                        <Image src={MPU}/>
                        <Image src={visa} className="ml-4"/>
                        </div>
                    </div>

                    <div className="col ml-3">
                        <p className="followUs">Follow us on</p>
                        <div>
                            <Image src={facebook}  />
                            <Image src={instagram} className="ml-3"/>
                            <Image src={twitter} className="ml-3"/>
                        </div>
                </div>
            {/* </div>   */}
        </div>
        <div className="copyrighttext">
            <p className="">Copyright @ 2020 IT-Merchant. All rights reserved.</p>
        </div>
    </div>
     
    );
  }
  
  export default Footer;