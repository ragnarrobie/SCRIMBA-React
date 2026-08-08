import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [id,setId] = useState(1)
  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(1);

   useEffect(() => {
    fetch(`https://swapi.tech/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data.result.properties))
      .catch((err) => console.error("fetch failed", err));
  }, [count]); 
  
  return (
    <div>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(prevcount =>prevcount + 1);
        }}
      >
        Get next character
      </button>
       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default Navbar;
