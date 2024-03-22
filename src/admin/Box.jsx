import React from "react";

const Box = ({ name, data, icon }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12 mb-3">
        <div className="box rounded-1 p-3">
          <div className="icon d-flex justify-content-between align-items-center">
            <h4>{name}</h4>
            <h4>{icon}</h4>
          </div>
          <h4>{data}</h4>
        </div>
      </div>
    </>
  );
};

export default Box;
