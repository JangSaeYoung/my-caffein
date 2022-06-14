/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Slide = () => {
    return (
        <Slidebox>
                <div className="slide-container">
                    <div className="slide-title">{`개발은 \n카페인과 함께`}</div>               
                    <img className="img-style" src={require("../assets/imges/sandol.png")} />
                </div>
        </Slidebox>
    );
};

export default Slide;

const Slidebox = styled.div`
  
    box-sizing: border-box;
    padding-top: 100px;
    padding-bottom: 20px;

    .slide-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        
    }

        .img-style {
        width: 200px;
        height: 200px;
    } 

`
