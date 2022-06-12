
import styled from 'styled-components';
import { InCommunity } from '../types/type';
import { Link } from "react-router-dom";


interface IncoProps {
    commu:  InCommunity;
}


const CommunityCard = ({commu}:IncoProps) => {
    return (
    <CardContainer>
         <div className="comu-content">
            <div className="commu-tag">{commu.tags}</div>
            <div className="commu-title">{commu.title}</div>
            <div className="commu-questions">{commu.questions}</div>
            <div className="commentBox">
           <div className="commu-comments">{commu.comments}</div>
           </div>
        </div>
        <Link to="/CommunityDetail">
        <div className="plusBtn">+더보기</div>
        </Link>
    </CardContainer>
    );
};

export default CommunityCard;


const CardContainer = styled.div`


/* border: 1px solid #CCCCCC;
border-radius: 10px;


position: relative;
  height: 280px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .comu-content {
    padding: 16px;
    padding-bottom: 0px;
    z-index: 1;
    
  }
 
  .commu-tag {
    width: 67px;
    height: 22px;
    border-radius: 4px;
    background-color: #7471FF;
    text-align: center;
    font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;

letter-spacing: -0.01em;

color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
   
  }

  .commu-title{
      width: 191px;
      height: 36px;
      font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
letter-spacing: -0.01em;

  }

  .commu-questions {
    width: 191px;
    height: 36px;
    font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

letter-spacing: -0.01em;
  }
  


.commentBox{
    background-color: red;
    margin-top: 67px;
    margin-bottom: 47px;
    display: flex;
    flex-direction: column;
align-items: flex-start;
padding: 0px;
}


.plusBtn{
    text-align: center;
    height: 14px;
width: 40.73px;

margin-left: 86.5px;
margin-right: 96.73px;
padding-bottom: 16px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #24DBAF;
} */


` 
;