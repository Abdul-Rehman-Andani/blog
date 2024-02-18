import React, { useState, useEffect } from 'react';
import { Catogary, Hero, Searchbar, Trending,Blog } from "../components/component";
import axios from "axios";


const Home = () => {

  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(1);

  const getBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog/${page}`);
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getBlogs();
  }, [page]);

  return (
    <>
      <Hero />

      <div className="row mt-4 justify-content-between">

        <div className="col-lg-7 mt-4 ">
          <div className="blog">
            {
              blog.map((b, i) => {
               return <Blog b={b} page={page} key={i}  />
              })
            }
          </div>

          <div className="pagination text-center">
          <button className='btn-1 mb-3 mt-5 mx-auto' onClick={() => setPage(page + 1)}>Show more</button>

          </div>
        </div>


        <div className="col-lg-4 ">
          <Catogary />
        </div>
      </div>
    </>
  )
}

export default Home;
