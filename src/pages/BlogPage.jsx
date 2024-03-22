import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import profile from "../assets/profile.png";
import { ProfileAvtar, Loading3 } from "../components/component";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [body, setBody] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ! API call for blogs
  const getBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog/${id}`);
      setIsLoading(false);
      setBlog(res.data);
      setUser(res.data.userId);
      setBody(res.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //console.log(id);
    document.title = blog.title;

    getBlog();

  }, [id]);

  return (
    <>
      <div className="row mb-4 mt-4">
        <div className="col-lg-6  mx-auto">
          {isLoading ? (
            <Loading3 />
          ) : (
            <>
              <div className="title">
                <h3>{blog.title}</h3>
                <h5 className="mt-3">{blog.subtitle}</h5>
              </div>

              <img
                src={`http://localhost:9000/images/${blog.img}`}
                className="img-fluid mt-3 mb-3 rounded-3"
              />

              <div className="body">
                {body.map((b, i) => {
                  return (
                    <p key={i} className="mt-3">
                      {b}
                    </p>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
