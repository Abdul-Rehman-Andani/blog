import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import profile from "../assets/profile.png";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Active, Loading2 } from "../components/component";

const Users = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:9000/user");
      setIsLoading(false);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelEdit = async (id) => {
    alert(id);
  };

  const handleDelete = async (id) => {
    if(confirm("Are you sure ? ")){
      await axios.delete(`http://localhost:9000/user/${id}`);
    }
  };

  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <>
      <div className="row">
        <SideBar />
        <Active />
        <div className="col-12 col-lg-10 users">
          <table>
            <tbody>
              {isLoading ? (
                <Loading2 />
              ) : (
                user.map((u, i) => {
                  return (
                    <>
                      <br />
                      <tr>
                        <td>
                          <img
                            className="mx-3"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                            src={
                              u.img == ""
                                ? profile
                                : `http://localhost:9000/images/${u.img}`
                            }
                            alt=""
                          />
                        </td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td onClick={() => handelEdit(u._id)}>
                          <h5>
                            <FiEdit />
                          </h5>
                        </td>
                        <td onClick={() => handleDelete(u._id)}>
                          <h5>
                            <MdOutlineDelete />
                          </h5>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
