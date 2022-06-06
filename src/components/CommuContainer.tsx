import { Link } from 'react-router-dom';
import CommunityCard from './CommunityCard';
import styled from 'styled-components';
import { InCamp, InCommunity } from '../types/type'
import React, {useState, useEffect} from 'react';



// 커뮤니티 카드 들어가는 공간

interface IncoProps {
    title: string,
    commus: InCommunity[];
}


const CommuContainer = ({ commus  } : IncoProps) => {


    const commucards = [
        {
            "id": 0,
            "tags": "조회수 TOP",
            "title": "합격 메일 답장 어떻게 할까요?",
            "questions": '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
            "comments" : "구글링해보세요."
        },
          {
            "id": 1,
            "tags": "조회수 TOP",
            "title": "합격 메일 답장 어떻게 할까요?",
            "questions": '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
            "comments" : "스티븐잡스가 직접 본다고 합니다!"
          },
          {
            "id": 2,
            "tags": "취업고민",
            "title": "합격 메일 답장 어떻게 할까요?",
            "questions": '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
            "comments" : "스터디하는 분들과 이야기 나눠봤나요?"
          },
          {
            "id": 3,
            "tags": "취업 고민",
            "title": "합격 메일 답장 어떻게 할까요?",
            "questions": '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
            "comments" : "공식문서를 보세요."
          },
    ];


    return (
        <Container>
        <div className="section-title">커뮤니티</div>
        <div className="camp-cards">
        {
        commucards.map((commu) => (
            <CommunityCard  commu={commu}   />
        ))
        }

        </div>
        </Container>
    );
};

export default CommuContainer;



const Container = styled.div`
  padding: 0px 16px;

  display: flex;
  flex-direction: column;
    width: 960px;
    height: 323px;
    margin-top: 624px;
    margin-left: 240px;
    margin-right: 240px;

  .section-title {
      margin-bottom: 8px;
      font-weight: bold;
  }
 
    
    .camp-cards {
    a {
      flex: 1;
    }
    @media (min-width: 680px) {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
}
`