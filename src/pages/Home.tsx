import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import CampCard from '../components/CampCard';
import CommunityCard from '../components/CommunityCard';
import Footer from '../components/Footer';

const Home = () => {
    return (
    <div>
        <Navigation />
        <CampCard />
        <Memo>베너자리입니다.</Memo>
        <CommunityCard />
        <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link>
        <Footer />
    </div>
    );
};

export default Home;

const Memo = styled.h1`
    width:300px;
    height:500px;
    background-color: red;
`

