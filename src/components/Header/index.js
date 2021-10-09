import React from 'react';

import Logo from '../../images/fbmdb-logo.png'

import { Wrapper, Content, LogoImg, } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo} alt='fbmdb-logo'/>
        </Content>
    </Wrapper>
);

export default Header;