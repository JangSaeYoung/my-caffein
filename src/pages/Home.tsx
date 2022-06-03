// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
// import CampContainer from './CampContainer';
import CommuContainer from './CommuContainer';
// import CampContainer from './CampContainer';
import Banner from '../components/Banner';

import { InCamp } from "../types/type";
import CampCard from '../components/CampCard';
import CampContainer from './CampContainer';
// export interface InCamp {
//     id: number;
//     name: string;
//     type: string;
//     status?: "모집전" | "모집중" | "모집완로"; 
//     field: string;
//     skill: string;
//     startDate: string;
//     thumbnail: string;
//     title: string;
// }

export interface InProps {
    title: string;
    camps: InCamp[];
}



const Home = ({camps, title }:InProps) => {
    // const [popularCamps, setPopularCamps] = useState<InCamp[]>();


    return (
    <HomeContainer>
        <Navigation />
        <div className="section-title">인기 부트 캠프</div>

        <div className="camp-cards">
            {camps.map((camp, index) => (
                <CampCard key={index} camp={camp} name='name' />
            ))}
        </div>


        {/* <CampCard /> */}
        {/* <CampContainer title={title} camps={camps} >
        {camps.map((camp, index) => (
                <CampCard key={index} camp={camp} name='name' />
            ))}
            </CampContainer> */}
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

