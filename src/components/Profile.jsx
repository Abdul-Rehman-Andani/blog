import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.png";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [blog, setBlog] = useState([]);
  const [followBtn, setFollowBtn] = useState();
  const [disable, setDisable] = useState("");
  const [displyBtn, setDisplyBtn] = useState(true);
  const [following, setFollowing] = useState(false);

  const getUser = async () => {
    try {
      const user = await axios.get(`http://localhost:9000/user/profile/${id}`);
      setProfile(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/blog/user/${id}`);
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const auth = async () => {
    const res = await axios.get("http://localhost:9000/user/auth", {
      withCredentials: true,
    });
    console.log(res.data);
  };

  const follow = async (followId) => {
    if (!document.cookie.includes("token")) {
      navigate("/signin");
    } else {
      await axios.post(
        "http://localhost:9000/follow",
        { followId },
        { withCredentials: true }
      );
      setDisplyBtn(false);
    }
  };

  const isFollowed = async () => {
    if (document.cookie.includes("token")) {
      const res = await axios.get(
        `http://localhost:9000/follow?followId=${id}`,
        { withCredentials: true }
      );
      console.log(res.data);
      if (res.data == "followed" || res.data == "account") {
        setDisplyBtn(false);
      }
    }
  };

  useEffect(() => {
    getUser();
    getBlog();
    isFollowed();
  }, [id]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div
            className="bg rounded-4 "
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              backgroundColor: "rgb(234, 247, 251)",
            }}
          ></div>
        </div>

        <div
          className="col-lg-5 text-center mx-auto mb-4"
          style={{ marginTop: "-140px" }}
        >
          <div className="profile-img rounded-4 ">
            {profile.img == "" ? (
              <img
                src={profileImg}
                alt="profile"
                style={{
                  height: "180px",
                  width: "180px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={`http://localhost:9000/images/${profile.img}`}
                alt="profile"
                style={{
                  height: "180px",
                  width: "180px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}
            <h3 className="mt-4">{profile.name}</h3>
            <h5 className="mt-3">{profile.bio}</h5>

            {displyBtn && (
              <button
                className="btn-1 mt-2"
                onClick={() => follow(profile._id)}
              >
                Follow
              </button>
            )}

            {following && (
              <button className="btn-1 mt-2" disabled>
                Following
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mx-auto">
          {blog.map((b, i) => {
            return (
              <div key={i}>
                <div
                  className="d-flex align-items-center gap-3 mt-3"
                  style={{ borderBottom: "var(--border)" }}
                >
                  <figure style={{ width: "150px", height: "150px" }}>
                    <img
                      src={`http://localhost:9000/images/${b.img}`}
                      className="rounded-4"
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </figure>
                  <div className="conetnt">
                    <h4>{b.title}</h4>
                    <p>{b.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
