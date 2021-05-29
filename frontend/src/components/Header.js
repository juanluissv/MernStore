import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from  '../actions/userActions';

const Header = () => {

    const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

    return (
        <header>
            <Navbar   expand="lg" collapseOnSelect className="nav1">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >
                        <h2 className="logofont"><span className="e">TECH</span>SHOP</h2>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto headtext">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>
                                CART
                            </Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to='/login'>
                            <Nav.Link>
                                <i className='fas fa-user'></i> Sign In
                            </Nav.Link>
                            </LinkContainer>
                        )}
                        {userInfo && userInfo.isAdmin && (
                             <NavDropdown title='Admin' id='adminmenu'>
                             <LinkContainer to='/admin/userlist'>
                                 <NavDropdown.Item>Users</NavDropdown.Item>
                             </LinkContainer>
                             <LinkContainer to='admin/productlist'>
                                 <NavDropdown.Item>Products</NavDropdown.Item>
                             </LinkContainer>
                             <LinkContainer to='admin/orderslist'>
                                 <NavDropdown.Item>Orders</NavDropdown.Item>
                             </LinkContainer>
                             </NavDropdown>
                        )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar   expand="lg" collapseOnSelect className="nav1">
            <Container>        
            <LinkContainer to='/'>
            <div class="logo"> 
			<h2 class="logofont"><span class="e">TECH</span>SHOP</h2>
            </div>	
            </LinkContainer>

            <Nav className="ml-auto headtext">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>
                                CART
                            </Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to='/login'>
                            <Nav.Link>
                                <i className='fas fa-user'></i> Sign In
                            </Nav.Link>
                            </LinkContainer>
                        )}
            </Nav>    
            </Container>                 
            </Navbar> */}

			{/* <div class="user">
			<i class="fa fa-user"></i>Luis Moreno<i class="fa fa-angle-down"></i>
			</div>
			<div class="shop">
			<i class="fa fa-shopping-cart"></i>$500.50<i class="fa fa-angle-down"></i>
			</div> */}

        </header>
    )
}

export default Header;