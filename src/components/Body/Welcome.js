import React from 'react';
import AppleCard from '../../images/apple_card.png';
import Note20 from '../../images/Note20.png';
import oneplus from '../../images/oneplus.png';
import SteelseriesArctis5 from '../../images/SteelseriesArctis5.png';
import xmnote10 from '../../images/xmnote10.png';
import amd from '../../images/amd.png';
import intel1 from '../../images/intel1.png';
import SmartTV from '../../images/SmartTV.png';
import sony from '../../images/sony.png';
import s10 from '../../images/s10.png';
import asus from '../../images/asus.png';
import xiao from '../../images/xiao.png';
import ipx from '../../images/ipx.png';
import vs from '../../images/vs.png';
import human from '../../images/human.png';
import whatIs from '../../images/whatIs.png';
import { Nav, Navbar, NavDropdown, Image, Button } from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
import '../../App.css';
import Greeting from './Greeting';

function Welcome() {
    

    return (
      <div className="container welcome mt-5">
          {/* <div className="row appleGreeting" style={{backgroundColor: '#FFFFFF'}}>
                <div className="col ml-5 mt-3">
                    <p className="greeting">Greetings!</p>
                    <p className="text">Find your way down here to look IT <br /> gadgets. Fresh start with new faces of <br />Technology.</p>
                </div>

                <div className="col">
                   <Image src={AppleCard}></Image>
                </div>
          </div> */}
          
{/*-------------------Latest Device Start---------------------- */}
          <div className="LatestDevicesSlider mt-5">
            <p className="LatestDevices">Latest Devices</p>
            <div id="carouselExampleControls" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="card-deck">
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={oneplus} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Oneplus Nord Pluse ReNo</p>
                        <p className="card-text sliderText2">800,000 Ks</p>
                        <p className="card-text sliderText3">Oneplus</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={Note20} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Samsung Note 20 Ultra</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Samsung</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={xmnote10} alt="Card image cap" />< br /><br />
                        <p className="card-text sliderText1">Xiaomi Mi Note 10</p>
                        <p className="card-text sliderText2">1,500,000 Ks</p>
                        <p className="card-text sliderText3">Xiaomi</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={SteelseriesArctis5} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                      </div>
                    </div>
                  </div>
                </div> 

                <div className="carousel-item">
                <div className="card-deck">
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={oneplus} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Oneplus Nord Pluse ReNo</p>
                        <p className="card-text sliderText2">800,000 Ks</p>
                        <p className="card-text sliderText3">Oneplus</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={Note20} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Samsung Note 20 Ultra</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Samsung</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={xmnote10} alt="Card image cap" />< br /><br />
                        <p className="card-text sliderText1">Xiaomi Mi Note 10</p>
                        <p className="card-text sliderText2">1,500,000 Ks</p>
                        <p className="card-text sliderText3">Xiaomi</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={SteelseriesArctis5} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                      </div>
                    </div>
                  </div>
              </div>

              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor: '#C4C4C4', width: '45px', height:'60px', position: 'absolute', left:'0px', top: '150px'}}></span>
                <span class="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor: '#C4C4C4', width: '45px', height:'60px', position: 'absolute', right:'0px', top: '150px'}}></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
{/*-------------------Latest Device End---------------------- */}

{/*-------------------Trending Device Start---------------------- */}
          <div className="TrendingDevicesSlider mt-5">
            <p className="TrendingDevices">Trending Devices</p>
            <div id="carouselExampleControls1" class="carousel slide">
              <div class="carousel-inner">
              <div className="carousel-item active">
                <div className="card-deck">
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={oneplus} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Oneplus Nord Pluse ReNo</p>
                        <p className="card-text sliderText2">800,000 Ks</p>
                        <p className="card-text sliderText3">Oneplus</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={Note20} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Samsung Note 20 Ultra</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Samsung</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={xmnote10} alt="Card image cap" />< br /><br />
                        <p className="card-text sliderText1">Xiaomi Mi Note 10</p>
                        <p className="card-text sliderText2">1,500,000 Ks</p>
                        <p className="card-text sliderText3">Xiaomi</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={SteelseriesArctis5} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="carousel-item">
                <div className="card-deck">
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={oneplus} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Oneplus Nord Pluse ReNo</p>
                        <p className="card-text sliderText2">800,000 Ks</p>
                        <p className="card-text sliderText3">Oneplus</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top img-fluid mx-auto d-block mt-3" src={Note20} alt="Card image cap" /><br />
                        <p className="card-text sliderText1">Samsung Note 20 Ultra</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Samsung</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={xmnote10} alt="Card image cap" />< br /><br />
                        <p className="card-text sliderText1">Xiaomi Mi Note 10</p>
                        <p className="card-text sliderText2">1,500,000 Ks</p>
                        <p className="card-text sliderText3">Xiaomi</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body text-center">
                        <img className="card-img-top mt-3" src={SteelseriesArctis5} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

              <a className="carousel-control-prev mt-5" href="#carouselExampleControls1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor: '#C4C4C4', width: '45px', height:'60px', position: 'absolute', left:'0px', top: '100px'}}></span>
                <span class="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next mt-5" href="#carouselExampleControls1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor: '#C4C4C4', width: '45px', height:'60px', position: 'absolute', right:'0px', top: '100px'}}></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
{/*-------------------Trending Device End---------------------- */}

{/*-------------------Popular Comparison Start---------------------- */}
          <div className="PopularComparisonCard mt-5">
            <p className="PopularComparison">Popular Comparisons</p>
            <div class="card-deck">
              <div class="card">
                <div className="row">
                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-3" src={amd} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>

                  <div className="col-2">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={vs} alt="Card image cap" /><br /><br />
                    </div>
                  </div>

                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={intel1} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>
                </div>

                  <button type="button" className="btn d-flex flex-row justify-content-center border border-3 w-75 ml-5" >
                    <span className="loginBtnText pt-1">Compare</span>
                    <span className="pt-2 pl-1"><ion-icon name="person-sharp" size="small"></ion-icon></span>
                  </button> 
                
                <br/>

              </div>

              <div class="card">
              <div className="row">
                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={SmartTV} alt="Card image cap" /><br /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>

                  <div className="col-2">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={vs} alt="Card image cap" /><br /><br />
                    </div>
                  </div>

                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={sony} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>
                </div>

                  <button type="button" className="btn d-flex flex-row justify-content-center border border-3 w-75 ml-5" >
                    <span className="loginBtnText pt-1">Compare</span>
                    <span className="pt-2 pl-1"><ion-icon name="person-sharp" size="small"></ion-icon></span>
                  </button> 
                
                <br/>
              </div>
            </div><br />

            <div class="card-deck">
              <div class="card">
              <div className="row">
                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-3 w-75" src={s10} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>

                  <div className="col-2">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={vs} alt="Card image cap" /><br /><br />
                    </div>
                  </div>

                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-4 w-75" src={ipx} alt="Card image cap" /><br /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>
                </div>

                  <button type="button" className="btn d-flex flex-row justify-content-center border border-3 w-75 ml-5" >
                    <span className="loginBtnText pt-1">Compare</span>
                    <span className="pt-2 pl-1"><ion-icon name="person-sharp" size="small"></ion-icon></span>
                  </button> 
                
                <br/>
              </div>
              <div class="card">
              <div className="row">
                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-2 w-75" src={asus} alt="Card image cap" /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>

                  <div className="col-2">
                    <div class="card-body text-center">
                        <img className="card-img-top mt-5" src={vs} alt="Card image cap" /><br /><br />
                    </div>
                  </div>

                  <div className="col">
                    <div class="card-body text-center">
                        <img className="card-img-top w-75 mt-3" src={xiao} alt="Card image cap" /><br /><br /><br />
                        <p className="card-text sliderText1">Steelseries Arctis 5</p>
                        <p className="card-text sliderText2">1,000,000 Ks</p>
                        <p className="card-text sliderText3">Steelseries</p>
                    </div>
                  </div>
                </div>

                  <button type="button" className="btn d-flex flex-row justify-content-center border border-3 w-75 ml-5" >
                    <span className="loginBtnText pt-1">Compare</span>
                    <span className="pt-2 pl-1"><ion-icon name="person-sharp" size="small"></ion-icon></span>
                  </button> 
                
                <br/>
              </div>
            </div>
          </div>
{/*-------------------Popular Comparison End---------------------- */}
          </div><br /><br />

{/*-------------------What is It-Merchant?------------------------- */}
          <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <Image src={human} />
                </div>

                <div className="col">
                    <Image src={whatIs} />
                </div>
            </div>
          </div> <br/><br />         
      </div>
    );
  }
  
  export default Welcome;