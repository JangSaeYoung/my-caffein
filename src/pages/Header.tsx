/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Slide from '../components/Slide';


const Header = () => {
    return (
        <HeaderBox>
          <Navigation />
          <Slide />
        </HeaderBox>
    );
};

export default Header;

const HeaderBox = styled.div`

        background-color: blue;
        box-sizing: border-box;
        width: 100vw;
        height: 560px;

`


