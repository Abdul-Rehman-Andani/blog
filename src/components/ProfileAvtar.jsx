import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import { MdVerified } from "react-icons/md";
import {useEffect} from "react";

const ProfileAvtar = ({ user }) => {

  useEffect(() => {
    
  },[]);
  
  return (
    <>
      <Link to={`/profile/${user._id}`} className="text-decoration-none">
        <div className="pro d-flex align-items-center gap-2 mb-3">
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50px",
              objectFit: "cover",
            }}
          >
            <img
              src={
                user.img == ""
                  ? profile
                  : `http://localhost:9000/images/${user.img}`
              }
              alt="profile-img"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50px",
              }}
            />
          </div>
          <div className="d-flex gap-1">
            <span className="text-black">
              <strong>{user.name}</strong>
            </span>
            <span>
              {user.role == 1 ? (
                <span style={{ color: "gold" }}>
                  <MdVerified />
                </span>
              ) : (
                <span style={{ color: "blue" }}>
                  <MdVerified />
                </span>
              )}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProfileAvtar;
