"use client";
import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleError = (event) => {
      console.log("Error caught ny error boundary", event.error);
      setHasError(true);
      setErrorMessage(event.error?.message || "Unknown Error");
    };

    return () => {
      window.addEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <div>{errorMessage}</div>;
  }

  return <div>{children}</div>;
};

export default ErrorBoundary;
