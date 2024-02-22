export const getRoomDescription = (filename) => {
  const nameWithoutExtension = filename.replace(/\.[^.]+$/, '');

  switch (nameWithoutExtension) {
    case 'fanroom':
      return 'Room with fans on the bed';
    case 'leafroom2':
      return 'Room with leaves on the bed';
    case 'moreleaves':
      return 'Another room with leaves on the bed';
    case 'tropicalleaf':
      return 'Room with tropical leaves';
    default:
      return 'Description not available';
  }
};
