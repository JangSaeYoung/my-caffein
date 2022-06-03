import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CampCard from '../components/CampCard';
import { InCamp } from '../types/type';


// 캠프 카드 들어가는 구역

interface InProps {
    title: string;
    camps: InCamp[];
}


const CampContainer= ( { title, camps }: InProps )=>{
    return (
    <Container>
        <div className="section-title">{title}</div>
        <div className="camp-cards">
            {camps.map((camp, index) => (
                <CampCard key={index} camp={camp} name='name' />
            ))}
        </div>
    </Container>
    );
    };

    
export default CampContainer;

const Container = styled.div`
    position: absolute;
width: 960px;
height: 323px;
left: 240px;
top: 624px;
    /* background-color: red; */

    .section-title {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: -0.01em;
        color: #000000;
    }







`
