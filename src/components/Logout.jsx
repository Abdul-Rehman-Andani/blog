import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/navbar";

const Logout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }

    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("username")
    localStorage.removeItem("profile");
    dispatch(logout());
    navigate("/signin");
  }, []);

  return (
    <>

    </>
  )
}

export default Logout
