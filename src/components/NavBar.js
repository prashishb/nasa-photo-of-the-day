import React from 'react';
import styled from 'styled-components';

export default function NavBar() {
    return (
        <div>
            <StyledNav>
                <h1>NASA Photo Of The Day</h1>
            </StyledNav>
            <StyledSpacer></StyledSpacer>
        </div>
    )
}

const StyledNav = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #343A40;
`
const StyledSpacer = styled.div`
    margin-bottom: 20%;
`