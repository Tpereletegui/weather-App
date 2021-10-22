import React from 'react';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import Weather from "../weather.png";

function Nav({onSearch}) {
  return (
    <div className="container">
     <img src={Weather} alt="weather" className="weather"/>
      <SearchBar onSearch={onSearch} />
      
    </div>
  );
};

export default Nav;
