import React from 'react';
import Product from './product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//console.log(products);
const store = ({products, AddToCart}) => {
    //console.log(products);
    return ( 
        <Container fluid>
            <Row className='row'>
                {products.map((product) =>(
                <Product key ={product.id} product={product} AddToCart={AddToCart} />
                ) )}
            </Row>
        </Container>
     );
}
 
export default store;