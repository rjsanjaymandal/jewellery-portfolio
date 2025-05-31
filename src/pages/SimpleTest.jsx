import React from "react";

const SimpleTest = () => {
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
      <h1>🔴 SIMPLE TEST - REACT IS WORKING!</h1>
      <p>If you can see this red page, React is working correctly!</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
      <div style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <p>✅ React Components Loading</p>
        <p>✅ JavaScript Working</p>
        <p>✅ Styling Applied</p>
      </div>
    </div>
  );
};

export default SimpleTest;
