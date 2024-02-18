import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import profile from "../assets/profile.png";
import axios from "axios";

const Blog = () => {

  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [body, setBody] = useState([]);

  // ! API call for blogs
  const getBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog/${id}`);
      console.log(res);
      setBlog(res.data);
      setUser(res.data.userId);
      setBody(res.data.body);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(id)
    getBlog();
  }, []);

  return (
    <>
      <div className="row mb-4 mt-4">
        <div className="col-lg-6  mx-auto" >

          <Link to={`/profile/${user._id}`} className='text-decoration-none'>
            <div className="pro d-flex align-items-center gap-2 mb-3">
              <div style={{ width: "50px", height: "50px", borderRadius: "50px", objectFit: "cover" }}>
                <img src={user.img == "" ? profile : `http://localhost:9000/images/${user.img}`} alt="profile-img" style={{ width: "100%", height: "100%", borderRadius: "50px" }} />
              </div>
              <div className='d-flex gap-1'>
                <span className='text-black'><strong>{user.name}</strong></span>
                <span >{user.role == 1 ? <span style={{ color: "gold" }}><MdVerified /></span> : <span style={{ color: "blue" }}><MdVerified /></span>}</span>
              </div>

            </div>
          </Link>

          <div className="title">
            <h3>{blog.title}</h3>
            <h5 className='mt-3'>{blog.subtitle}</h5>
          </div>

          <img src={`http://localhost:9000/images/${blog.img}`} className='img-fluid mt-3 mb-3 rounded-3' />

          <div className="body">
            {
              body.map((b, i) => {
                return <p key={i} className='mt-3'>{b}</p>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
