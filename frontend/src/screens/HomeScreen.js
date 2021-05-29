import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { LinkContainer } from 'react-router-bootstrap';
import { Image, Nav } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
      dispatch(listProducts())
    },[dispatch])


    return (
        <>            

        <div className='banner'>
        <LinkContainer to='/product/6000bcf152f55505568f0f57'>
		<Nav.Link>	<Image src="../images/banner.jpg" className="imagebanner" /></Nav.Link>
        </LinkContainer>
		</div>


            <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
                </Row>            
            }             
        </>
    )
}

export default HomeScreen;