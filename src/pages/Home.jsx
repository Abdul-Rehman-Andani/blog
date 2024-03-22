import React, { useState, useEffect } from "react";
import {
  Catogary,
  Hero,
  Searchbar,
  Trending,
  Blog,
  Loading,
} from "../components/component";
import axios from "axios";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog?page=${page}`);
      setIsLoading(false);

      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "B blogic"
    getBlogs();
  }, [page, blog]);

  return (
    <>
      <Hero />

      <div className="row mt-4 justify-content-between">
        <div className="col-lg-7 mt-4 order-lg-0 order-2 ">
          <div className="blog">
            {isLoading ? (
              <Loading />
            ) : (
              blog.map((b, i) => {
                return <Blog b={b} page={page} key={i} />;
              })
            )}
          </div>

          <div className="pagination text-center">
            <button
              className="btn-1 mb-3 mt-5 mx-auto"
              onClick={() => setPage(page + 1)}
            >
              Show more
            </button>
          </div>
        </div>

        <div className="col-lg-4 order-lg-1 order-0">
          <Catogary />
        </div>
      </div>
    </>
  );
};

export default Home;
