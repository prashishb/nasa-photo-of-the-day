import React from 'react';
import styled from 'styled-components';

export default function NavBar() {
    return (
        <StyledNav>
            <h1>NASA Photo Of The Day</h1>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #343A40;
    color: white;
    margin-bottom: 2%;
`
