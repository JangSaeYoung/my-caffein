import styled from 'styled-components';
// import { InProps } from '../pages/Home';
import { InCamp } from '../types/type';


interface InProps {
    camp: InCamp;
    name: string;
    title: string;
}

const CampCard = ({camp, name, title}: InProps) => {
    return (
    <CardContainer>
        <div className="card-content">
            <div className="card-title">{camp.title}</div>
            <div className="card-name">즐거워요</div>
            <div className="csrd-start-date">22년 6월 3일</div>
        </div>
    </CardContainer>
    );
};

export default CampCard;

const CardContainer = styled.div`

    position: relative;
    width:50px;
    height: 280px;
    border-radius: 10px;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 8px;
    margin-top: 900px;

    .card-content{   
    /* padding: 20px; */
    z-index: 1;
    background-color: black;
    }
`;









