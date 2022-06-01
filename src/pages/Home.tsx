import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Home = () => {
    return (
    <div>
        <Memo>홈 화면입니다.</Memo>
        <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link>
    </div>
    );
};

export default Home;

const Memo = styled.h1`
    width:300px;
    height:500px;
    background-color: red;
`

