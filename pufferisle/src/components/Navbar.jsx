import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import '../utils/styles/navbar.css';

const Navigation = () => {
  // const currentPage = useLocation().pathname;
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Navbar className='bg-body-tertiary'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Nav className='me-auto'>
          <LinkContainer to='/booking'>
            <Nav.Link>Book a Room</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about'>
            <NavDropdown
              title='About'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}>
              <LinkContainer to='/photos'>
                <NavDropdown.Item>Photos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/area'>
                <NavDropdown.Item>The Area</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </LinkContainer>
          <LinkContainer to='/contact'>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
