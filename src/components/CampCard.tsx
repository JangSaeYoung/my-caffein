import styled from 'styled-components';
import { InCamp } from '../types/type';


interface InProps {
    camp: InCamp;
    field: boolean;
}

const CampCard = ({camp, field}: InProps) => {
    return (
    <CardContainer>
        <div className="camp-content">
            <div className="camp-status">
            {
                field ? `${camp.field}/${camp.skill}` : camp.status
            }
            </div>
        {/* <div className="camp-status">{camp.status}</div> */}

        <div className="camp-name">{camp.name}</div>
        <div className="camp-startDate">{camp.startDate}</div>
        </div>
    </CardContainer>
    );
};

export default CampCard;

const CardContainer = styled.div`

position: relative;
    height: 280px;
    background-color: black;
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 8px;

    .camp-content {
    padding: 20px;
    z-index: 1;
    color: white;
    }

    .camp-name {
    font-weight:bold;
    padding-bottom: 8px;
    width: 192px;
    height: 41.02px;
    }
` 
;









