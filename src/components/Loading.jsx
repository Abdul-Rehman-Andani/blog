import React from "react";

const Loading = () => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map(() => {
          return (
            <div className="loading row mb-3">
              <div className="col-7">
                <div className="full"></div>
                <div className="full"></div>
                <div className="half"></div>
              </div>

              <div className="col-4 img"></div>
            </div>
          );
        })}
    </>
  );
};

export default Loading;
