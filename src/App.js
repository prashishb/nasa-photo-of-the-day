import React from "react";
import NasaPhotos from './components/NasaPhotos';
import NavBar from './components/NavBar'
import "./App.css";
import styled from 'styled-components';

function App() {


  return (
    <div>
      <NavBar />
      <NasaPhotos />
    </div>
  );
}

export default App;
