// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React, {useState, useEffect} from 'react';
import CommuContainer from '../components/CommuContainer';
import Banner from '../components/Banner';
import CampContainer from '../components/CampContainer';



const Home = () => {


    return (
    <HomeContainer>
        <Navigation />
        <CampContainer title={''} camps={[]} />
        <Banner />
        <CommuContainer title={''} commus={[]}  />
        <Footer />
        {/* <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link> */}
    </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    max-width: 960px;

`

