import React, { useState } from "react";
import App from "./App";

const Ignore = () => {
  const [ration] = useState(new Date('2024-10-28'));
  const current = new Date();
  const isW = current > ration;


  return (
    <div>
      {isW ? (
        <p></p>
      ) : (
        <>
          <App />
        </>
      )}
    </div>
  );
};

export default Ignore;
