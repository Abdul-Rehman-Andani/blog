import React from "react";
import { MdMenu } from "react-icons/md";
import { close, open } from "../features/sidebar";
import { useSelector, useDispatch } from "react-redux";

const Active = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((store) => store.sidebar);

  const handleActive = () => {
    if(active == ""){
        dispatch(open());
    }
    else{
        dispatch(close());
    }
  };

  return (
    <>
      <h3 className="d-lg-none d-block">
        <MdMenu onClick={handleActive} />
      </h3>
    </>
  );
};

export default Active;
