import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosFatch = () => {
  const [data, setdata] = useState([]);
  const [array, setarray] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setdata(res.data))
      .catch((err) => {
        setarray(err.message);
      });
  }, []);

  return (
    <div>
      <h1>{array}</h1>
      <div>
        {data.map((pos) => {
          const { id, title, body } = pos;
          return (
            <div key={id}>
              <div>
                <h1>{id}</h1>
                <h1>{title}</h1>
                <h1>{body}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxiosFatch;
