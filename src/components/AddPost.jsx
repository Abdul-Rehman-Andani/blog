import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools";

const AddPost = () => {
  const catogaries = [
    "Programming",
    "Designing",
    "Sports",
    "Fashion",
    "Development",
    "Economy",
    "Science",
    "Medical",
    "Politics",
    "Beauty",
    "Health",
    "Engineering",
    "Bussiness",
    "Entertaiment",
  ];
  const { id } = useParams();
  const [img, setImg] = useState();
  const [input, setInput] = useState({
    title: "",
    catogary: "",
    subtitle: "",
    body: [""],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const addBody = () => {
    setInput({ ...input, body: [...input.body, ""] });
  };

  const handleBody = (e, i) => {
    const { value } = e.target;
    const newBody = input.body;
    newBody[i] = value;
    setInput({ ...input, body: newBody });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", input.title);
    formData.append("subtitle", input.subtitle);
    formData.append("catogary", input.catogary);
    input.body.map((d) => {
      return formData.append("body", d);
    });

    const blog = await axios.post(`http://localhost:9000/blog/${id}`, formData);
    if (blog.data.message == "created") {
      e.target.reset();
    }
  };
  

  useEffect(() => {
    const editor = new EditorJS({
      holderId : "editor",
      data : "",
      tools : tools,
      
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="sign-container p-lg-4 mt-5">
            <h3 className="mb-4">
              <strong>Add blog</strong>
            </h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleInput}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  placeholder="Sub title"
                  name="subtitle"
                  onChange={handleInput}
                />
              </div>

              <div className="input-group mb-3">
                <select name="catogary" onChange={handleInput}>
                  <option value="" disabled selected>
                    Select Catogary
                  </option>
                  {catogaries.map((cat, i) => {
                    return (
                      <option value={cat} key={i}>
                        {cat}
                      </option>
                    );
                  })}
                </select>
              </div>

              {input.body.map((e, i) => {
                return (
                  <div className="input-group mb-3">
                    <textarea
                      placeholder="Body"
                      name="body"
                      onChange={(e) => handleBody(e, i)}
                    ></textarea>
                  </div>
                );
              })}
              <button type="button" className="mb-3" onClick={addBody}>
                Add body
              </button>

              <div className="input-group mb-3">
                <input
                  type="file"
                  name="img"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>

              <button type="submit">Post blog</button>
            </form>
            <div id="editor"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
