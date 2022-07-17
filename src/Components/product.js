import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const product = ({product, AddToCart}) => {
    //console.log(products);
    return ( 
                   <Col className='col'>
                   <Card className='card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {product.img} />
                        <Card.Body className='card-body'>
                            <Card.Title className='card-body-title'>{product.title}</Card.Title>
                            <Card.Text className='card-body-title'>
                                ${product.price}
                            </Card.Text>
                            <Button className='card-button' onClick={()=>AddToCart(product)} variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                   </Col> 
     );
}
 
export default product;
//<img src={product.img} alt="item-product"></img>
  //                      <h3>{product.title}</h3>
    //                    <div className="">$ <h3>{product.price}</h3></div>
      //                  <div className="">
        //                    <button onClick={()=>AddToCart(product)}>Add to Cart</button>
          //              </div>
        //   <div class=" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 contain">
        //             <div class="well text-center">
        //                 <img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg">
        //                 <h5 id="movie-Title">Spider-Man: No Way Home</h5>
        //                 <a onclick="movieSelected('tt10872600')" class="btn btn-primary more-info" heref="movie.html" target="_blank">More info</a>
        //            </div>
        //          </div>