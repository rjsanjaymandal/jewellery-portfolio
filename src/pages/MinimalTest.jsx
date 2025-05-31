import React from "react";

function MinimalTest() {
  console.log("MinimalTest component is rendering");
  
  return (
    <div>
      <h1>MINIMAL TEST - REACT IS WORKING</h1>
      <p>If you can see this text, React is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default MinimalTest;
