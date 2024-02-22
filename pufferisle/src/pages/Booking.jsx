import { useState, useEffect } from 'react';
import { getRoomDescription } from '../utils/functions/roomDescriptions';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Booking = () => {
  const [roomUrls, setRoomUrls] = useState([]);

  useEffect(() => {
    const importRooms = async () => {
      try {
        const rooms = import.meta.glob('../images/rooms/*.jpg');
        console.log(rooms);
        const roomPaths = Object.keys(rooms);
        const urls = await Promise.all(
          roomPaths.map(async (path) => {
            const module = await rooms[path]();
            const filename = path.split('/').pop();
            const roomName = filename.replace(/\.[^.]+$/, '');
            const description = getRoomDescription(filename);
            console.log(module);
            return {
              url: module.default,
              name: roomName,
              description: description,
            }; // Access the URL from the dynamically imported module
          }),
        );
        setRoomUrls(urls);
      } catch (error) {
        console.error('Error importing rooms:', error);
      }
    };

    importRooms();
  }, []); // Run this effect only once after the initial render

  return (
    <div>
      {roomUrls.length > 0 ? (
        <Row>
          {roomUrls.map((room, index) => (
            <Col key={index}>
              <Card style={{}}>
                <Card.Img src={room.url} alt={room.name} />
                <Card.Body>
                  <Card.Title>{room.name}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                  <Button>Book This Room!</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div>No rooms found</div>
      )}
    </div>
  );
};

export default Booking;
