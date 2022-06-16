/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavigationBox>
      <div className="navbox">
        <img
          className="nav-logo"
          src={require("../../assets/imges/logo-white.png")}
          alt="사이트 로고"
        />
        <img
          className="nav-user"
          src={require("../../assets/imges/ic-person-white.png")}
          alt="사용자 로고"
        />
      </div>
    </NavigationBox>
  );
};

export default Navigation;

const NavigationBox = styled.div`
  background: #7471ff;
  height: 30px;
  padding: 10px 0;
  width: 100%;
  position: fixed;
  z-index: 1;

  .navbox {
    display: flex;
    justify-content: space-between;
    margin: 0 50px;
  }

  .nav-logo {
    width: 100px;
    height: 24px;
  }

  .nav-user {
    width: 24px;
    height: 24px;
  }
`;
