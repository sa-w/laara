import React from "react";

const ErrorComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8d7da",
        color: "#842029",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        ❌
      </div>
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        Something went wrong!
      </h1>
      <p
        style={{
          fontSize: "16px",
        }}
      >
        We're sorry for the inconvenience. Please try again later.
      </p>
    </div>
  );
};

export default ErrorComponent;
