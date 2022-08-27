import React from 'react';
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
        </div>
    );
}


export default carousel;