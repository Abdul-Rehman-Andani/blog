import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPost = ({ id }) => {
  const [input, setInput] = useState({
    title: "",
    subtitle: "",
    img: "",
    body: [""],
  });

  const getData = async () => {
    const res = await axios.get(`http://localhost:9000/blog/${id}`);
    setInput(res.data);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleBody = (e, i) => {
    const { value } = e.target;
    const newBody = input.body;
    newBody[i] = value;
    setInput({ ...input, body: newBody });
  };

  useEffect(() => {
    getData();
  }, [id]);

  // input.body.map((d) => {
  //   return formData.append("body", d);
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("subtitle", input.subtitle);
    const res = await axios.patch(`http://localhost:9000/blog/${id}`, input);
    if (res.data == "updated") {
      setIsActive(false);
    }
  };
  return (
    <>
      <div className="col-lg-5  rounded-3 mt-5 mx-auto">
        <div className="sign-container bg-white p-lg-4  p-3">
          <h3 className="mb-4">
            <strong>Edit</strong>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleInput}
                value={input.title}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Title"
                name="subtitle"
                onChange={handleInput}
                value={input.subtitle}
              />
            </div>

            {input.body.map((b, i) => {
              return (
                <div className="input-group mb-3" key={i}>
                  <textarea
                    placeholder="body"
                    name={`body`}
                    onChange={(e) => handleBody(e, i)}
                    value={b}
                    style={{ height: "150px" }}
                  ></textarea>
                </div>
              );
            })}

            <div className="mb-3">
              <img
                src={`http://localhost:9000/images/${input.img}`}
                alt="img"
                width={250}
              />
            </div>

            <button>Save changes</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;
