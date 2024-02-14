import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../utils/styles/navbar.css';

const Navigation = () => {
  // const currentPage = useLocation().pathname;

  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/booking'>
                <Nav.Link>Book a Room</Nav.Link>
              </LinkContainer>
              <NavDropdown title='About'>
                <LinkContainer to='/photos'>
                  <NavDropdown.Item>Photos</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/area'>
                  <NavDropdown.Item>The Area</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
