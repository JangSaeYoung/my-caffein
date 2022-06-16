/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../../../components/Navigation/Navigation";
import Slide from "../../../components/Slide/Slide";

const HeaderSection = () => {
  return (
    <Container>
      <Navigation />
      <Slide />
    </Container>
  );
};

export default HeaderSection;

const Container = styled.div`
  background-color: #7471ff;
  box-sizing: border-box;
  width: 100vw;
  height: 560px;
`;
