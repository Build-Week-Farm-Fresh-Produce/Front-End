import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog"
import './App.css';

function App() {
  return (
    <div className="App">
      <Catalog />
    </div>
  );
}

export default App;
