import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Catogary ,Blog } from "../components/component";
import axios from "axios";

const CatogaryPage = () => {

  const { catogary } = useParams();
  const [blog, setBlog] = useState([]);
  const [count, setCount] = useState(0);

  // ! API call for blogs
  const getBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog/catogary/${catogary}`);
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // ! API call for blogs count
  const countBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog/count/${catogary}`);
      setCount(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlogs();
    countBlogs();
  }, [catogary]);

  return (
    <>

      <div className="row justify-content-between">
        <div className="col-lg-7 mt-4">
          <div className="info d-flex align-items-center gap-3">
            <h3 className="mb-4">{catogary}</h3>
            <p>( {count} )</p>
          </div>
          {
            blog.map((b, i) => {
              return <Blog b={b} key={i} />
            })
          }

        </div>

        <div className="col-lg-4">
          <Catogary />
        </div>

      </div>

    </>
  )
}

export default CatogaryPage;
