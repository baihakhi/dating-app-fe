import React, { useState } from "react";
import NavigationBar from "../components/Navbar";
import "../styles/Home.css";
import Intro from "../components/Intro";
import { Modal } from "../components/Modal";

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  function handleLoginCLick() {
    setShowModal(true);
  }
  return (
    <div>
      <div className="base">
        <NavigationBar onLoginClick={handleLoginCLick} />
        <Intro />
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>
      <div>{props.word}</div>
    </div>
  );
};

export default Home;
