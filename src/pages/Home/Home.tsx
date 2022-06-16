// import { Link } from 'react-router-dom';
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Banner, Footer } from "components";
import { CampSection, HeaderSection, CommunitySection } from "./Components";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <MainContainer>
        <CampSection title={""} camps={[]} />
        <Banner />
        <CommunitySection title={""} commus={[]} />
      </MainContainer>
      <Footer />
      {/* <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link> */}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
`;

const MainContainer = styled.div`
  max-width: 960px;
  margin: 50px 50px 0 50px;
`;
