import React, { useState, useEffect } from "react";
import { Active, Box, SideBar } from "../components/component";
import { LuUsers } from "react-icons/lu";
import { SlPicture } from "react-icons/sl";
import { BsCardList } from "react-icons/bs";
import axios from "axios";

const Dashboard = () => {
  const [post, setPost] = useState(0);
  const [user, setUser] = useState(0);
  const [group, setGroup] = useState([]);

  const countPost = async () => {
    const res = await axios.get("http://localhost:9000/blog/count");
    setPost(res.data);
  };

  const countUser = async () => {
    const res = await axios.get("http://localhost:9000/user/count");
    setUser(res.data);
  };

  const getGroup = async () => {
    const res = await axios.get("http://localhost:9000/blog/group");
    setGroup(res.data);
  };

  useEffect(() => {
    countPost();
    countUser();
    getGroup();
  }, [user, post]);

  return (
    <>
      <div className="row">
        <SideBar />
        <Active />
        <Box name={"Posts"} data={post} icon={<SlPicture />} />
        <Box name={"Catogaries"}   icon={<BsCardList />} />
        <Box name={"Users"} data={user} icon={<LuUsers />} />
        <div className="col-12 col-lg-6 mt-4 text-center">
          <table>

          {
            group.map((g, i) => {
              return <tr className="mb-3">
                <td>{g._id}</td>
                <td>{g.count}</td>
              </tr>
            })
          }
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
