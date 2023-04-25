import React, { useState } from "react";

export default function () {
  return (
    <>
      <div style={{ background: "#5f038c", height: "100vh" }}>
        <h1
          style={{
            fontSize: "30px",
            padding: "20px 0px 0px 50px",
            color: "white"
          }}>
          Sarv <span style={{ color: "#9604ff" }}>Shiksha</span>
        </h1>
        <div className="left-vpart">
          <div
            className="player-wrapper"
            style={{
              height: "315px",
              width: "560px",
              borderRadius: "10px",
              overflow: "hidden"
            }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6VW2Pl7j6y0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
