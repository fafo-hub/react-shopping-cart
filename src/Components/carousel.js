import React from 'react';
import {Carousel} from "react-bootstrap";


// const countDown = () => {
//   var today = new Date ()
//   var eventDate = new Date ("December 25,2022 00:00:00")
  
//   var currentTime = today.getTime()
//   var eventTime = eventDate.getTime()

//   var remainingTime = eventTime - currentTime;

//   var seconds = Math.floor(remainingTime/1000)
//   var minutes = Math.floor(seconds/60);
//   var hours = Math.floor(minutes/60)
//   var days = Math.floor(hours/24)

//   seconds = seconds % 60
//   minutes = minutes % 60
//   hours = hours % 24

//   seconds = (seconds<10) ? "0"+ seconds : seconds;
//   minutes = (minutes<10) ? "0"+ minutes : minutes;
//   hours = (hours<10) ? "0"+ hours : hours;
//   days = (days<10) ? "0"+ days : days;

//   document.querySelector("days").textContent = days;
//   document.querySelector("hours").textContent = hours;
//   document.querySelector("minutes").textContent = minutes;
//   document.querySelector("seconds").textContent = seconds;

//   setTimeout(countDown, 1000);
// }
// countDown()


const carousel = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item className='item1'>
    
    <Carousel.Caption>
      
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      
  
      
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item className='item2'>

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
  </Carousel.Item>
</Carousel>
        </div>
    );
}


export default carousel;