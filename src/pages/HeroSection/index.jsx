import React from "react";
import unsplash from "../../assets/images/unsplash.png";
import Button from '@mui/material/Button';
import "../../styles/HeroSection/index.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Central Texas<br />Fly Fishing</h2>
          <p className="hero-description">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <Button variant="contained" disabled className="hero-button">
            Get started
          </Button>
        </div>
        <div className="hero-image">
          <img src={unsplash} alt="Fishing scene" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
