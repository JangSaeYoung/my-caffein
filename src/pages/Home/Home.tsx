// import { Link } from 'react-router-dom';
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Banner, Footer } from "components";
import { CampSection, HeaderSection, CommunitySection } from "./Components";
import { useMediaQuery } from "react-responsive";
import { InCommunity, InCamp } from "types/type";

const community: InCommunity = {
  id: 0,
  tags: ["야호", "정말"],
  title: "합격 메일 답장 어떻게 할까요?",
  content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
  comments: [
    {
      profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
      content: "와우",
      nickname: "멘토1234",
    },
    {
      profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
      content: "와우",
      nickname: "멘토1234",
    },
  ],
  questions: "",
};

const campMock: InCamp = {
  name: "업무 단순화 & 자동화로 엑셀을 실무에 더 적극 활용하기",
  type: "popular",
  status: "",
  field: "",
  skill: "",
  startDate: "",
  thumbnail: "",
  id: 0,
};

const Home = () => {
  const [communities, setCommunities] = useState<InCommunity[]>([]);
  const [popularCamps, setPopularCamps] = useState<InCamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<InCamp[]>([]);

  useEffect(() => {
    setCommunities([community, community, community, community]);
    setPopularCamps([campMock, campMock, campMock, campMock]);
    setSaleCamps([campMock, campMock, campMock, campMock]);
  }, []);

  console.log("여기", communities);

  return (
    <Container>
      <HeaderSection />
      <MainContainer>
        <CampSection title={""} camps={popularCamps} />
        <Banner />
        <CommunitySection title={""} commus={communities} />
      </MainContainer>
      <Footer />
      {/* <Link to="/CampDetail">캠프자세히보기</Link>
        <Link to="/CommunityDetail">커뮤니티자세히보기</Link> */}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
`;

const MainContainer = styled.div`
  max-width: 960px;
  margin: 50px 50px 0 50px;
`;
