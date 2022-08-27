import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState} from 'react';
import emoji from "./Images/88-886440_emoji-feliz-png-emoticon-smile-clipart.png"



const Product = ({product, AddToCart}) => {
    //console.log(products);
    const [smShow, setSmShow] = useState(false);
    const wrapperFunction = () => {
      setSmShow(true);
      AddToCart(product)
  }
    return ( 
                   <Col className='col'>
                      <Card className='card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {product.img} />
                          <Card.Body className='card-body'>
                            <Card.Title className='card-body-title'>{product.title}</Card.Title>
                            <Card.Text className='card-body-title'>
                                ${product.price}
                            </Card.Text>
                            <Button onClick= {() => wrapperFunction()} className="card-button">Add to Cart</Button>
                            <Modal
                              size="sm"
                              show={smShow}
                              onHide={() => setSmShow(false)}
                              aria-labelledby="example-modal-sizes-title-sm"
                            >
                              <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-sm">Item added to cart</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>Thank you for shopping with us <img src= {emoji} alt="Emoji" className="emoji" /> </Modal.Body>
                            </Modal>
                          </Card.Body>
                        </Card>
                   </Col> 
     );
}
 
export default Product;

