import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    document.title = "Page not found | 404";
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-center mt-5">
            <strong>Page not found</strong>
          </h1>
          <img src="error.png" width={600} />
          <p className="text-center mt-4">
            <Link to="/">Go to Home</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
