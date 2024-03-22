import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import { Active, Loading2 , Model, EditPost} from "../components/component";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState();

  const getPost = async () => {
    const res = await axios.get(`http://localhost:9000/blog?page=${page}`);
    setIsLoading(false);
    setPost(res.data);
  };

  const handelEdit = async (id) => {
    setIsActive(true);
    setId(id);
  };

  const handleDelete = async (id) => {
    if(confirm("Are you sure ? ")){
      await axios.delete(`http://localhost:9000/blog/${id}`);
    }
  };

  useEffect(() => {
    getPost();
  }, [post]);

  return (
    <>
    {
      isActive && <Model name={"post"} setIsActive={setIsActive} id={id} />
    }
      <div className="row">
        <SideBar />
        <Active />
        <div className="col-lg-10 col-12">
          <table>
              {isLoading ? (
                <Loading2 />
              ) : (
                post.map((p, i) => {
                  return (
                    <>
                      <br  />
                      <tr key={i}>
                        <td>
                          <img
                            className="mx-2"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                            src={`http://localhost:9000/images/${p.img}`}
                            alt=""
                          />
                        </td>
                        <td>{p.title}</td>
                        <td>{p.catogary}</td>
                        <td onClick={() => handelEdit(p._id)}>
                          <h5>
                            <FiEdit />
                          </h5>
                        </td>
                        <td onClick={() => handleDelete(p._id)}>
                          <h5>
                            <MdOutlineDelete />
                          </h5>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Posts;
