/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fauser } from "@fortawesome/free-regular-svg-icons";
// import assets from "../assets/산돌1png";
// import assets from '.src/assets/imges/sandol.png';

const Navigation = () => {
    return (
        <NavigationBox>
            <div className='Navigation-header'>
                <div className="header-name">caffein</div>
                <div className='header-user'>
                {/* <FontAwesomeIcon icon={"fa-regular fa-user" } /> */}
                <div>아이콘</div>
                </div>
            </div>
            <div className="Navigation-slide">
                <div className="slide-text">
                    <div className="slide-title">{`개발은 \n카페인과 함께`}</div>
                </div>
                <div className="slide-img">
                    <img className="img-style" src={require("../assets/imges/sandol.png")} />
                </div>
            </div>
        </NavigationBox>
    );
};

export default Navigation;

const NavigationBox = styled.div`
position: absolute;
    width: 1438px;
    height: 560px;
    left: 0px;
    top: 0px;
    background: linear-gradient(97.88deg, #854BFF -84.42%, #7179FF 15.02%, #6D83FF 36.89%, #698BFF 54.79%, #6499FF 80.65%, #659BF7 108.49%, #669FEA 148.27%, #69A9CD 197.99%, #6CB1B2 239.75%);;
    
    .Navigation-header {
        display: flex;
        flex-direction: inherit;
        justify-content: space-between;
        padding: 16px 241px 16px 241px;  
    }

    .header-name {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.07em;
        color: #FFFFFF;
        /* border: 1px solid #D9D9D9 */   //글자 그대로 테투리 잡기
    }

    .header-user{
        left: 20.83%;
        right: 20.83%;
        top: 12.5%;
        bottom: 12.5%;
        color: #FFFFFF;
    }

    .Navigation-slide {
        height: 480px;
        display: flex;
        flex-direction: inherit;
        justify-content: space-between;
        padding: 16px 241px 16px 241px; 
        align-items: flex-end;
    }

    .slide-text{
        position: absolute;
        width: 278.84px;
        height: 100.8px;
        left: 238.18px;
        top: 342.6px;

    }

    .slide-title{
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 65px;
        color: #FFFFFF;
    }

    .img-style {
        position: absolute;
        width: 597.51px;
        height: 400px;
        left: 597.33px;
        top: 104px;
        border-radius: 10px;
    }

`


