import React from 'react';
import {Carousel} from "react-bootstrap";


const carousel = () => {

     return (
        <div>
          <Carousel>
  <Carousel.Item className='item1'>
    
    <Carousel.Caption className='carousels'>      
      <h3>LOW ON CASH, and BANK?</h3>
      <p>WE GAT YOU!!!, WE ACCEPT BITCOIN, and other CRYPTOCURRENCIES</p>
    </Carousel.Caption>
    
  </Carousel.Item>
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
</Carousel>
        </div>
    );
}


export default carousel;