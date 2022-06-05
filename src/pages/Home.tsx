// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
// import CampContainer from './CampContainer';
import CommuContainer from './CommuContainer';
// import CampContainer from './CampContainer';
import Banner from '../components/Banner';
import { useState } from 'react';
import { InCamp } from "../types/type";
import CampCard from '../components/CampCard';
import CampContainer from './CampContainer';





const Home = () => {

    const [popularCamps, setPopularCamps] = useState<InCamp[]>();

    return (
    <HomeContainer>
        <Navigation />
        <div className="section-title">인기 부트 캠프</div>
        <CampContainer title='인기부트캠프' camps={[]} />

        <Banner />
        <CommuContainer />
        <Footer />
        {/* <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link> */}
    </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    max-width: 960px;

    .camp-cards {
        margin-top: 700px;
    }
`

