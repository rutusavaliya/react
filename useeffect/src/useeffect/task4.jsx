import React, { useState } from 'react';

const MyComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentIndex}`);
      const data = await response.json();
      setApiData(prevData => [...prevData, data]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

  return (
    <div>
      <h1>API Data</h1>
      <button onClick={fetchData}>Fetch Next Item</button>
     
      <ul>
        {apiData.map((item, id) => (
          <li key={id}>
            {item.title} - {item.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
