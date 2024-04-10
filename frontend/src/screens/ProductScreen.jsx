import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';
import { Col,ListGroup} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import axios from 'axios';


const ProductScreen = () => {
    const {id:productId} = useParams();
    const [product, setProducts] = useState({});
    useEffect(() => {
      const fetchProducts = async () => {
        const { data }= await axios.get('/api/products/'+productId) 
        setProducts(data)
      };
      fetchProducts();
    },[productId]);
    
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
