import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h2>Welcome to LearnSphere Classroom</h2>
      <p>
        A collaborative space for teachers and students to connect, learn, and
        grow together.
      </p>

      <button className="get-started" onClick={() => navigate("/classroom")}>
        Get Started
      </button>
    </section>
  );
}

export default Home;
