import styled from "styled-components";
import { InCamp } from "../../types/type";

interface InProps {
  camp: InCamp;
  field: boolean;
}

const CampCard = ({ camp, field }: InProps) => {
  return (
    <CardContainer>
      <div className="camp-content">
        <div className="camp-status">
          {field ? `${camp.field}/${camp.skill}` : camp.status}
        </div>
        <div className="camp-name">{camp.name}</div>
        <div className="camp-startDate">{camp.startDate}</div>
      </div>
    </CardContainer>
  );
};

export default CampCard;

const CardContainer = styled.div``;
