import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import profileImg from "../assets/profile.png";
import { dark } from "../features/themeSlice";


const Navbar = () => {

  const dispatch = useDispatch();
  const [drop, setDrop] = useState(false);
  const { signin, profile } = useSelector((store) => store.navbar);

  return (
    <>
      <header className="position-sticky bg-white" style={{top : 0, zIndex: 99}}>
      <nav className='py-4 d-flex justify-content-between align-items-center' >
        <div className="logo">
          <h3><Link to="/" className="text-decoration-none text-black"><strong><span style={{ color: "blue" }}>B</span> blogic</strong></Link></h3>
        </div>
        <div className="control d-flex gap-3 align-items-center" style={{cursor : "pointer"}} onClick={() => setDrop(!drop)}>
          {
            profile && <div className="profile d-flex  align-items-center gap-2">
              <div style={{ width: "35px", height: "35px", borderRadius: "50px" }}>
                {
                  localStorage.getItem("profile") == "" ? <img src={profileImg} style={{ objectFit: "cover", width: "100%", height: "100%" }} /> :
                  <img style={{ objectFit: "cover", borderRadius : "50px", width: "100%", height: "100%" }} src={`http://localhost:9000/images/${localStorage.getItem("profile")}`} alt="profile" />

                }
              </div>
              <span><IoMdArrowDropdown /></span>
              {
                drop && <div className="setting position-absolute">
                  <ul>
                    <Link to={`/profile/${localStorage.getItem("userId")}`} className="text-decoration-none text-black"><li className="py-1">Profile</li></Link>
                    <Link to={`/edit/${localStorage.getItem("userId")}`} className="text-decoration-none text-black"><li className="py-1">Edit</li></Link>
                    <Link to={`/post/${localStorage.getItem("userId")}`} className="text-decoration-none text-black"><li className="py-1">Add post</li></Link>
                    <li className="py-1" onClick={() => dispatch(dark())}>Dark</li>
                  </ul>
                </div>
              }
            </div>
          }

          {/* <span style={{ fontSize: "22px" }}><MdOutlineDarkMode /></span> */}
          {
            signin ? <Link to="/signin"><button className='btn-1'>Sign in</button></Link> :
              <Link to="/logout"><button className='btn-1'>Logout</button></Link>
          }
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar;
