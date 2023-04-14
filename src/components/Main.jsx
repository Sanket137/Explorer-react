import React, { useState, useEffect, useRef } from "react";
import videoBg from "../assets/stars-b_upd.mp4";

function Main() {
  const videoRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [textScroll, setTextScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const newPos = window.pageYOffset;
      setTextScroll(newPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + (textScroll * 2) / window.innerHeight; // calculate scale based on scroll position
  const opacity = 1 - textScroll / window.innerHeight; // calculate opacity based on scroll position


  useEffect(() => {
    function handleScroll() {
      const newPos = window.pageYOffset;
      setScrollPos(newPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 1 + (scrollPos * 1.5) / window.innerHeight;
    }
  }, [scrollPos]);




  return (
    <div style={{ height: "2000px" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      

      <span className="hero-title">
        <div className="" style={{ transform: `scale(${scale})`, opacity: opacity }}>
        <h1>Unlock the Future</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, id.
        </p>
        </div>
      </span>
    </div>
  );
}

export default Main;
