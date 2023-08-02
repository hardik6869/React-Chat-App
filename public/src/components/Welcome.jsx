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
  background: rgb(0, 0, 0);
  background: radial-gradient(circle, rgba(0, 0, 0, 1) 0, #ffffff 85%);
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
