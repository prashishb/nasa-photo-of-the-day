import React from "react";
import NasaPhotos from './components/NasaPhotos';
import "./App.css";
import styled from 'styled-components';

function App() {


  return (
    <StyledContainer>
      <h1>NASA Image Of The Day</h1>
      <NasaPhotos />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
