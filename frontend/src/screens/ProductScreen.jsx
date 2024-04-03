import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import {Link} from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'


const ProductScreen = () => {
    const {id:productId} = useParams();
    const product = products.find((p) => p._id ===productId);
  return (
  <>
  <Link className='btn btn-light my-3' to='/'>Go Back
  </Link>
  
    
    <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${product.price}
            </ListGroup.Item>
        </ListGroup>
    </Col>
  
  </>)
}

export default ProductScreen
