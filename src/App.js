import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhotos from './components/NasaPhotos';
import "./App.css";

function App() {


  return (
    <div class="container">
      <h1>NASA Image Of The Day</h1>
      <NasaPhotos />
    </div>
  );
}

export default App;
