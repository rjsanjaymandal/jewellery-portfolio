import React from "react";

const BasicTest = () => {
  console.log("BasicTest component is rendering");
  
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ff0000",
      color: "#ffffff",
      padding: "50px",
      fontSize: "24px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1>🔴 BASIC TEST COMPONENT</h1>
      <p>If you can see this, React is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <div style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <p>✅ React is rendering</p>
        <p>✅ JavaScript is working</p>
        <p>✅ Styles are applied</p>
      </div>
    </div>
  );
};

export default BasicTest;
