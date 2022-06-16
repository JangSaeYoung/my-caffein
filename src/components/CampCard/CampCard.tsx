import styled from "styled-components";
import fonts from "styles/fonts";
import { InCamp } from "../../types/type";

interface InProps {
  camp: InCamp;
  field: boolean;
}

const CampCard = ({ camp, field }: InProps) => {
  return (
    <Container>
      <BgOpacityBlack />
      <div className="camp-content">
        <div className="camp-status">
          {field ? `${camp.field}/${camp.skill}` : camp.status}
        </div>
        <div className="camp-name">{camp.name}</div>
        <div className="camp-startDate">{camp.startDate} 부터</div>
      </div>
    </Container>
  );
};

export default CampCard;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 8px;
  background-color: #a94545;
  width: 224px;
  height: 280px;
  border-radius: 10px;

  .camp-content {
    z-index: 1;
    color: white;
    padding: 16px;
  }

  .camp-status {
    ${fonts.Caption}
    padding-bottom:8px;
  }

  .camp-name {
    ${fonts.Body1}
    font-weight:bold;

    padding-bottom: 8px;
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 0px 0px 10px 10px;
`;
