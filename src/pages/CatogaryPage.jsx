import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Catogary, Blog, Loading } from "../components/component";
import axios from "axios";

const CatogaryPage = () => {
  const { catogary } = useParams();
  const [blog, setBlog] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // ? API call for blogs
  const getBlogs = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9000/blog/catogary/${catogary}`
      );
      setBlog(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // ? API call for blogs count
  const countBlogs = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9000/blog/count/${catogary}`
      );
      setCount(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = `Categary | ${catogary}`
    getBlogs();
    countBlogs();
  }, [catogary]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-lg-7 mt-4 order-md-0 order-1">
          <div className="info d-flex align-items-center gap-3">
            <h3 className="mb-4">{catogary}</h3>
            <p>( {count} )</p>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            blog.map((b, i) => {
              return <Blog b={b} key={i} />;
            })
          )}
        </div>

        <div className="col-lg-4 order-md-1 order-0">
          <Catogary />
        </div>
      </div>
    </>
  );
};

export default CatogaryPage;
