import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import MainMenu from './MainMenu';
import Container from '../Container/Container';
import { locationProp } from '../Layout/layoutProps';
import * as styles from '../../services/styles';

import './Header.css';

const HeaderSty = styled.div`
    margin-bottom: 20px;
`;

const HeaderContainerSty = styled.div`
    padding: 15px 0;
    @media (max-width: 575.98px) {
        text-align: center;
    }
`;

const HeaderItemSty = styled.div`
    display: inline-block;
    vertical-align: middle;
    ${props => props.logo && `
        width: 50%;
        min-width: 280px;
        font-size: 1.5rem;
        font-weight: 300;
        @media (max-width: 575.98px) {
            width: auto;
            margin-bottom: 10px;
        }
    `}
    ${props => props.menu && `
        ${styles.clearFix}
        width: 50%;
        @media (max-width: 768px) {
            width: auto;
        }
    `}
`;

const HeaderItemMenuSty = styled.div`
    float: right;
`;

const HeaderSeparatorSty = styled.div`
    border-bottom: 1px solid #dee2e6;
    max-width: 90%;
    margin: 0 auto;
`;

const Header = (props) => {
    const { location } = props;
    return (
        <HeaderSty>
            <Container>
                <HeaderContainerSty>
                    <HeaderItemSty logo>
                        <Link to='/' className='header-logo-link'>
                            Artem Demo, frontend dev.
                        </Link>
                    </HeaderItemSty>
                    <HeaderItemSty menu>
                        <HeaderItemMenuSty>
                            <MainMenu location={location} />
                        </HeaderItemMenuSty>
                    </HeaderItemSty>
                </HeaderContainerSty>
                <HeaderSeparatorSty />
            </Container>
        </HeaderSty>
    );
};

Header.propTypes = {
    location: locationProp,
};

Header.defaultProps = {
    location: {},
};

export default Header;