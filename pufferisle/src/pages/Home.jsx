import welcome from '../images/home/welcome.jpg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4} md={4}>
            <Image src={welcome} rounded fluid />
          </Col>
        </Row>
      </Container>
      {/* <img src={welcome} /> */}
    </>
  );
};

export default Home;
