import React, { useState } from "react";
import "../style/login-page.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

let selected = [];
const Filter = ({ lan, index }) => {
  const [select, setselect] = useState(false);

  const SelectFilter = (lan) => {
    if (!selected.includes(lan)) {
      selected.push(lan);
    }
    console.log(selected);
    if (select) {
      setselect(false);
    } else if (!select) {
      setselect(true);
    }
  };

  return (
    <>
      <span
        onClick={() => {
          SelectFilter(lan);
        }}
        className={select ? "card active-ly" : "card"}>
        {lan}
      </span>
    </>
  );
};

const Student = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const languagesInIndia = [
    "Assamese",
    "Bengali",
    "Bodo",
    "Dogri",
    "Gujarati",
    "Hindi",
    "Kannada",
    "Kashmiri",
    "Konkani",
    "Maithili",
    "Malayalam",
    "Manipuri",
    "Marathi",
    "Nepali",
    "Oriya",
    "Punjabi",
    "Sanskrit",
    "Santali",
    "Sindhi",
    "Tamil",
    "Telugu",
    "Urdu",
    "Kokborok",
    "Mizo",
    "Khasi",
    "Garo",
    "English",
    "Lotha",
    "Phom",
    "Rengma"
  ];
  const classes = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th"
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "60%"
    }
  };
  // Modal.setAppElement("#yourAppElement");

  return (
    <>
      <div className="tt-1" style={{ background: "#5f038c", height: "100vh" }}>
        {/* <h1
          style={{
            fontSize: "30px",
            padding: "20px 0px 0px 50px",
            color: "white",
            fontWeight: "600"
          }}>
          <br />
          Language
        </h1> */}
        <button onClick={openModal} className="btn-lg1">
          Language
        </button>
        <button className="btn-lg1">Class</button>
        <button className="btn-lg1">Subject</button>

        <Link
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px"
          }}
          to="/video">
          <span>Continue</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </Link>
        {/* <div
          className="filter-ly"
          style={{ width: "100%", padding: "20px 50px" }}>
          {languagesInIndia.map((lan, index) => {
            return (
              <span className="card" key={index}>
                {lan}
              </span>
            );
          })}
        </div> */}
        {/* <h1
          style={{
            fontSize: "30px",
            padding: "20px 0px 0px 50px",
            color: "white",
            fontWeight: "600"
          }}>
          Class
        </h1> */}
        {/* <div
          className="filter-ly"
          style={{ width: "100%", padding: "20px 50px" }}>
          {classes.map((lan, index) => {
            return (
              <span className="card" key={index}>
                Class {lan}
              </span>
            );
          })} */}
        {/* </div>
        <h1
          style={{
            fontSize: "30px",
            padding: "20px 0px 0px 50px",
            color: "white",
            fontWeight: "600"
          }}>
          Subject
        </h1>
        <div className="d-flex" style={{ width: "100%", padding: "20px 50px" }}>
          <div className="card">English</div>
          <div className="card">Hindi</div>
          <div className="card">Japanese</div>
          <div className="card">English</div>
          <div className="card">English</div>
        </div> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}>
          <div style={{ textAlign: "right" }}>
            <button onClick={closeModal}>
              <span className="material-symbols-outlined">cancel</span>
            </button>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
              height: "90%"
            }}>
            <div
              className="filter-ly"
              style={{ width: "100%", padding: "20px 50px" }}>
              {languagesInIndia.map((lan, index) => {
                return <Filter lan={lan} index={index} key={index} />;
              })}
            </div>
            <h1
              style={{
                fontSize: "30px",
                padding: "20px 0px 0px 50px",
                color: "white",
                fontWeight: "600"
              }}>
              Class
            </h1>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Student;
