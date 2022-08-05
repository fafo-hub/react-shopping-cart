import React from 'react';
import {Carousel} from "react-bootstrap";
import Example from './example';


const carousel = () => {

     return (
        <div>
        <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>YOU WILL ALWAYS FEEL THE  <br/><span style={{color:'gold'}}>DRIP....</span></h1>
              <button className="-danger">ENJOY FREE DELIVERY ON ITEMS OVER $2000!!!</button>
              <Example />
            </div>
          </div> 
        </div> 
      </div>
          
  {/* <Carousel.Item className='item1'>
    
    <Carousel.Caption className='carousels'>      
      <h3>LOW ON CASH, and BANK?</h3>
      <p>WE GAT YOU!!!, WE ACCEPT BITCOIN, and other CRYPTOCURRENCIES</p>
    </Carousel.Caption>
    
  </Carousel.Item> */}
  {/* <Carousel.Item className='item2'>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='item3'>
    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}

        </div>
    );
}


export default carousel;