/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import styled from "styled-components";

const Slide = () => {
  return (
    <Container>
      <div className="slide-container">
        <div className="slide-title">{`개발은 \n산돌이와 함께`}</div>
        <img
          className="slide-img"
          src={require("../../assets/imges/sandol.png")}
        />
      </div>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 20px;
  margin: 0 50px;

  .slide-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 960px;
    height: 350px;
  }

  .slide-title {
    flex: 1;
    white-space: pre-line;
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }

  .slide-line {
    width: 5px;
    color: whitesmoke;
  }

  .slide-img {
    width: 450px;
    height: 350px;
  }
`;
