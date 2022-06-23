import { Link } from "react-router-dom";
import styled from "styled-components";
import CampCard from "../../../components/CampCard/CampCard";
import { InCamp } from "../../../types/type";
import React, { useState, useEffect } from "react";
import fonts from "styles/fonts";

// 캠프 카드 들어가는 구역

interface InProps {
  title: string;
  camps: InCamp[];
}

const CampSection = ({ title, camps }: InProps) => {
  return (
    <Container>
      <div className="section-title">인기 부트 캠프</div>
      <div className="camp-cards">
        {camps.map((camp, index) => (
          <CampCard camp={camp} key={index} field={false} />
        ))}
      </div>
      <div className="section-title">특가 할인 캠프</div>
      <div className="camp-cards">
        {camps.map((camp, index) => (
          <CampCard camp={camp} key={index} field={true} />
        ))}
      </div>
    </Container>
  );
};

export default CampSection;

const Container = styled.div`
  .section-title {
    ${fonts.H1};
    padding-top: 20px;
    padding-bottom: 4px;
  }

  .camp-cards {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;
