import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

const Banner = () => {
  return (
    <Container>
      <div className="banner-text">
        현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  max-width: 960px;
  padding: 30px 40px;
  background-color: ${colors.primary1};
  color: ${colors.white};
  ${fonts.H1};
  margin: 50px 0;
`;
