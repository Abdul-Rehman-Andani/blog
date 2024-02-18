import { FaTwitter ,FaFacebook} from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
          <div className="row align-items-center hero">
              <div className="col-lg-8 col-12">
                  <h1 className='mt-4'><span style={{ fontWeight: "600" }}>Sharing</span> stories, insights, knowledge and ideas <span style={{ fontWeight: "600" }}>that inspire</span></h1>
                  <p className='mt-4'>Welcome to B blog a digital hub where <strong>Knowledge, experiance, insprition, and creativity</strong> will improve your life meet the new world of <strong>knowlegde hub</strong> and take advantage of others knowledge.</p>
        </div>
        <div className="col-lg-4 col-12 mt-lg-0 mt-4 d-flex gap-4 justify-content-center icons" style={{fontSize : "20px"}}>
          <span style={{color: "rgb(29, 161, 242)"}}><FaTwitter /></span>
          <span style={{color: "blue"}}><FaFacebook /></span>
          <span style={{color: "red"}}><FaPinterest /></span>
        </div>
      </div>
    </>
  )
}

export default Hero;
