import { useState, useEffect } from 'react';

const Photos = () => {
  const [amenitiesUrl, setAmenitiesUrl] = useState([]);

  useEffect(() => {
    const importAmenities = async () => {
      try {
        const amenities = import.meta.glob('../images/amenities/*jpg');
        const amenitiesPath = Object.keys(amenities);
        const urls = await Promise.all(
          amenitiesPath.map(async (path) => {
            const module = await amenities[path]();
            return module.default;
          }),
        );
        setAmenitiesUrl(urls);
      } catch (error) {
        console.error('Error importing amenties:', error);
      }
    };
    importAmenities();
  }, []);

  return (
    <>
      {amenitiesUrl.length > 0 ? (
        <>
          {amenitiesUrl.map((url, index) => (
            <img src={url} alt={`amenity ${index + 1}`} key={index} />
          ))}
        </>
      ) : (
        <div>No Pictures Found</div>
      )}
    </>
  );
};

export default Photos;
