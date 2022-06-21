import styled from "styled-components";
import { Link } from "react-router-dom";
import fonts from "styles/fonts";
import Comments from "../Comments/index";
import { InCommunity } from "types/type";
import Tags from "components/Tags";

interface IncoProps {
  commu: InCommunity;
}

const CommunityCard = ({ commu }: IncoProps) => {
  return (
    <Container>
      <div className="content">
        <Tags tags={commu.tags} />
        <div className="title">{commu.title}</div>
        <div className="questions">{commu.questions}</div>
      </div>
      <div className="commets">
        <Comments comments={[]} />
      </div>
      <Link to="/CommunityDetail">
        <div className="plusBtn">+더보기</div>
      </Link>
    </Container>
  );
};

export default CommunityCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 320px;
  box-sizing: border-box;
  background-color: #6bcbb8;
  border-radius: 10px;
  padding: 16px;

  .content {
    color: white;
  }

  .tag {
    padding-bottom: 8px;
  }

  .title {
    ${fonts.Body1}
    font-weight: bold;
    padding-bottom: 10px;
  }

  .questions {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .commets {
    color: black;
    background-color: red;
  }
`;
