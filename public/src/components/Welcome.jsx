import React from "react";
import styled from "styled-components";
import robot from "../assets/robot.gif";

const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <div className="robot-img">
        <img src={robot} alt="Robot" />
      </div>
      <h1>
        Welcome, <span>{currentUser.username}</span>
      </h1>
      <h1>Please select a chat to Start Messaging.</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background: radial-gradient(circle, #ebe9ffa6 100%, #ffffff 50%);
  text-shadow: 2px 2px 5px #9186f3;
  color: #000000bb;
  .robot-img {
    height: 50%;
    width: 40%;
    img: {
      height: 20rem;
    }
  }
  h1 {
    padding: 20px;
  }
  span {
    color: #4e0eff;
    text-transform: uppercase;
  }
`;

export default Welcome;
