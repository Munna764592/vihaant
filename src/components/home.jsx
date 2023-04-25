import React from "react";
import Img1 from "../image/right-img.png";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="left">
          <h3>
            Sarv <span style={{ color: "#9604ff" }}>Shiksha</span>
          </h3>
          <div className="left-tebg">
            <span className="left-t1">
              अब पढ़ो अपनी,
              <br /> भाषा में!
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "white",
                lineHeight: "25px",
                fontWeight: "500"
              }}>
              <br />
              Empower rural India with decentralized education. Democratize
              learning with an open-source platform. Connect with mentors for
              personalized guidance.
            </span>
            <span className="left-t2">Empowering Indian Education</span>
          </div>
        </div>
        <div className="right">
          <div className="d-flex navbar-ly">
            {/* <div
              className="d-flex justify-content-evenly"
              style={{ width: "50%" }}>
              <div>Features</div>
              <div>About Us</div>
              <div>Blog</div>
            </div> */}
            <div
              className="d-flex justify-content-evenly"
              style={{ width: "80%" }}>
              <button className="btn-ly">Educator</button>
              <Link to="/login" className="btn-ly">
                Student
              </Link>
              <Link to="/signup" className="btn-ly">
                SignUp
              </Link>
            </div>
          </div>
          <div className="rgh-main">
            <img src={Img1} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
