import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>LearnSphere</span> Classroom
        </h1>
        <p className="hero-subtitle">
          A collaborative platform where teachers empower students to learn,
          share, and grow together.
        </p>
        <span className="login-link" onClick={() => navigate("/Classroom")}>
          Get Started
        </span>
        <p
          style={{
            backgroundColor: "#4cccff",
            height: "0.2px",
            width: "25%",
            marginInline: "auto",
            marginTop: "7px",
          }}
        />
      </div>
    </section>
  );
}

export default Home;
