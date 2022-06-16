import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner-text">
        현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
      </div>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  text-align: center;
  background: #7471ff;

  .banner-text {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.01em;
    color: #ffffff;
    padding: 33px 394px 33px 42px;
  }
`;
