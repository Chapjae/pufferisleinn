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

const Booking = () => {
  const [roomUrls, setRoomUrls] = useState([]);

  useEffect(() => {
    const importRooms = async () => {
      try {
        const rooms = import.meta.glob('../images/rooms/*.jpg');
        const roomPaths = Object.keys(rooms);
        const urls = await Promise.all(
          roomPaths.map(async (path) => {
            const module = await rooms[path]();
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
        <div>
          {roomUrls.map((url, index) => (
            <img src={url} alt={`Room ${index + 1}`} key={index} />
          ))}
        </div>
      ) : (
        <div>No rooms found</div>
      )}
    </div>
  );
};

export default Booking;
