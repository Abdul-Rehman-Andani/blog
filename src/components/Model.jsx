import { RxCross2 } from "react-icons/rx";
import { EditPost } from "./component";

const Model = ({setIsActive, id, name}) => {
 
  return (
    <>
      <div className="model">
        <span
          className="text-white position-absolute"
          style={{ right: "20px", top: "20px", fontSize: "30px" }}
        >
          <RxCross2 onClick={() => setIsActive(false)} />
        </span>
        <div className="container">
          <div className="row mt-5 mb-5">
          {
            name == "post" ? <EditPost id={id} /> : ""
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
