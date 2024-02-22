export const getRoomDescription = (filename) => {
  switch (filename) {
    case 'fanroom.jpg':
      return 'Room with fans on the bed';
    case 'leafroom2.jpg':
      return 'Room with leaves on the bed';
    case 'moreleaves.jpg':
      return 'Another room with leaves on the bed';
    case 'tropicalleaf.jpg':
      return 'Room with tropical leaves';
    default:
      return 'Description not available';
  }
};
