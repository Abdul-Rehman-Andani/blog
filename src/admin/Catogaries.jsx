import React, { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Active from "./Active";

const Catogaries = () => {
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:9000/catogary", data);
    if (res.data == "created") {
      e.target.reset();
    }
  };
  return (
    <>
      <div className="row">
        <SideBar />
        <Active />
        <div className="col-lg-10 col-12 catogaries">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="mb-3"
                  name="name"
                  placeholder="Catogary"
                  onChange={handleChange}
                />
                <button type="submit">Add Catogary</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catogaries;
