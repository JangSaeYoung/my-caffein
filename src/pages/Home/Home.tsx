// import { Link } from 'react-router-dom';
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import CommuContainer from "./Components/CommunitySection";
import Banner from "../../components/Banner/Banner";
import CampContainer from "./Components/CampSection";
import Slide from "../../components/Slide/Slide";
import Header from "./Components/HeaderSection";

import { CampSection, HeaderSection, CommunitySection } from "./Components";

const Home = () => {
  return (
    <HomeContainer>
      <HeaderSection />
      <div className="mainContainer">
        <CampSection title={""} camps={[]} />
        <Banner />
        <CommunitySection title={""} commus={[]} />
      </div>
      <Footer />
      {/* <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link> */}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin: 0 auto;

  .maincontainer {
    max-width: 960px;
    background-color: pink;
  }
`;
