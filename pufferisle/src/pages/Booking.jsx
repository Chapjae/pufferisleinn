// import { useEffect } from 'react';

// const rooms = import.meta.glob('../images/rooms/*.jpg', {
//   query: '?url',
//   import: 'default',
// });
// const roomPaths = Object.keys(rooms);

// // for (const room in rooms) {
// //   rooms[room]().then((room) => {
// //     <img src={room} />;
// //     console.log(room);
// //   });
// // }

// const Booking = () => {
//   useEffect(() => {
//     for (const room in rooms) {
//       rooms[room]().then((room) => {
//         <img src={room} />;
//         console.log(room);
//       });
//     }
//   }, []);

//   const loadImages = async () => {
//     const response = await fetch(rooms);
//   };

//   return (
//     <div>
//       {/* <img src={roomPaths} /> */}

//       {/* {roomPaths.map((path, index) => {
//         console.log(path);
//         return <img src={path} alt={`${index + 1}`} key={index} />;
//       })} */}
//     </div>
//   );
// };

// export default Booking;

import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

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
            console.log(module);
            return module.default; // Access the URL from the dynamically imported module
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
        <Container>
          <Row>
            {roomUrls.map((url, index) => (
              <Card key={index} xs={6}>
                <Card.Img
                  src={url}
                  alt={`Room ${index + 1}`}
                  key={index}
                  fluid
                />
                <Card.Body>
                  <Card.Title>{url.slice(65, -4)}</Card.Title>
                  <Card.Text>{index + 1}</Card.Text>
                  <Button>Book This Room!</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      ) : (
        <div>No rooms found</div>
      )}
    </div>
  );
};

export default Booking;
