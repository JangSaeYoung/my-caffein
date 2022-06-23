import { Link } from "react-router-dom";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";
import styled from "styled-components";
import { InCamp, InCommunity } from "../../../types/type";
import React, { useState, useEffect } from "react";
import fonts from "styles/fonts";

// 커뮤니티 카드 들어가는 공간

interface IncoProps {
  title: string;
  commus: InCommunity[];
}

const CommunitySection = ({ title, commus }: IncoProps) => {
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="cards">
        {commus.map(community => (
          <CommunityCard commu={community} key={community.id} />
        ))}
      </div>
    </Container>
  );
};

export default CommunitySection;

const Container = styled.div`
  .title {
    font-size: 16px;
    font-weight: 700px;
    line-height: 18px;
    padding-top: 20px;
    padding-bottom: 4px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;
