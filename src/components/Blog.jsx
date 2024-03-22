import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import ProfileAvtar from "./ProfileAvtar";

const Blog = ({ b }) => {
  return (
    <>
      <div
        className="row pt-3 mb-3 justify-content-between align-items-center "
        style={{ borderTop: "var(--border)" }}
      >
        <div className="col-lg-8 col-7">
          <ProfileAvtar user={b.userId} />
          {/* <Link
            to={`/profile/${b.userId._id}`}
            className="text-decoration-none"
          >
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
                    b.userId.img == ""
                      ? profile
                      : `http://localhost:9000/images/${b.userId.img}`
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
                  <strong>{b.userId.name}</strong>
                </span>
                <span>
                  {b.userId.role == 1 ? (
                    <span style={{ color: "gold" }}>
                      <MdVerified />
                    </span>
                  ) : (
                    <span style={{ color: "blue" }}>
                      <MdVerified />
                    </span>
                  )}{" "}
                </span>
              </div>
            </div>
          </Link> */}
          <div className="blog">
            <Link
              to={`/blog/${b._id}`}
              className="text-decoration-none text-black"
            >
              <h4>
                <strong>{b.title}</strong>
              </h4>
              <p className="mt-3">{b.subtitle}</p>
            </Link>
            <span>{b.date}</span>
            <Link
              to={`/catogary/${b.catogary}`}
              className="text-decoration-none text-black"
            >
              <span className="cat-badge mx-2">{b.catogary}</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-5">
          <figure  >
            <Link to={`/blog/${b._id}`}>
              <img
                src={`http://localhost:9000/images/${b.img}`}
                className="img-fluid rounded-3"
                style={{height: "120px", width: "100%", objectFit: "cover"}}
              />
            </Link>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Blog;
