import { useState, useEffect } from 'react';

const Area = () => {
  const [areaUrl, setAreaUrl] = useState([]);

  useEffect(() => {
    const importArea = async () => {
      try {
        const area = import.meta.glob('../images/area/*jpg');
        const areasPath = Object.keys(area);
        const urls = await Promise.all(
          areasPath.map(async (path) => {
            const module = await area[path]();
            return module.default;
          }),
        );
        setAreaUrl(urls);
      } catch (error) {
        console.error('Error importing amenties:', error);
      }
    };
    importArea();
  }, []);

  return (
    <>
      {areaUrl.length > 0 ? (
        <>
          {areaUrl.map((url, index) => (
            <img src={url} alt={`area ${index + 1}`} key={index} />
          ))}
        </>
      ) : (
        <div>No Pictures Found</div>
      )}
    </>
  );
};

export default Area;
