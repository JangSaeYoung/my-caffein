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

const CommunitySection = ({ title, commus }: IncoProps) => {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="camp-cards">
        {commus.map(community => (
          <CommunityCard commu={community} key={community.id} />
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
