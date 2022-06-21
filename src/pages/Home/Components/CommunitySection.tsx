import { Link } from "react-router-dom";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";
import styled from "styled-components";
import { InCamp, InCommunity } from "../../../types/type";
import React, { useState, useEffect } from "react";

// 커뮤니티 카드 들어가는 공간

interface IncoProps {
  title: string;
  commus: InCommunity[];
}

const CommunitySection = ({ commus }: IncoProps) => {
  const commucards = [
    {
      id: 0,
      tags: "조회수 TOP",
      title: "합격 메일 답장 어떻게 할까요?",
      questions: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
      comments: [],
    },
    {
      id: 1,
      tags: "조회수 TOP",
      title: "합격 메일 답장 어떻게 할까요?",
      questions: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
      comments: [],
    },
    {
      id: 2,
      tags: "취업고민",
      title: "합격 메일 답장 어떻게 할까요?",
      questions: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
      comments: [],
    },
    {
      id: 3,
      tags: "취업 고민",
      title: "합격 메일 답장 어떻게 할까요?",
      questions: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
      comments: [],
    },
  ];

  return (
    <Container>
      <div className="section-title">커뮤니티</div>
      <div className="camp-cards">
        {commucards.map(commu => (
          <CommunityCard commu={commu} key={commu.id} />
        ))}
      </div>
    </Container>
  );
};

export default CommunitySection;

const Container = styled.div`
  /* padding: 0px 16px;

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
} */
`;
