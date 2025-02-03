import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import unsplash5 from '../../assets/images/unsplash5.png';
import '../../styles/FeatureOptionSection/index.css'; // Import the new CSS file

const FeatureOptionSection = () => {
  return (
    <div className="feature-option-container">
      <div className="feature-option-header">
        <h1 className="feature-option-title">Featured options</h1>
      </div>
      <div className="accordion-container">
        <Accordion className="accordion-style">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span">Explore Fly Fishing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-detail-container">
              <img alt="loading..." src={unsplash5} className="accordion-img" />
              <div className="accordion-text-container">
                <h3 className="accordion-heading">Explore Fly Fishing</h3>
                <p className="accordion-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                <div>
                  <Button variant="contained" className="learn-more-btn">Learn more</Button>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion-style">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            <Typography component="span">Fly Fishing Experiences</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-detail-container">
              <img alt="loading..." src={unsplash5} className="accordion-img" />
              <div className="accordion-text-container">
                <h3 className="accordion-heading">Fly Fishing Experiences</h3>
                <p className="accordion-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                <div>
                  <Button variant="contained" className="learn-more-btn">Learn more</Button>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion-style" >
          <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Gear Up and Catch More</Typography>
          </AccordionSummary>
          <AccordionDetails style={{color:'#F1ECE1'}}>
            <div className="accordion-detail-container">
              <img alt="loading..." src={unsplash5} className="accordion-img" />
              <div className="accordion-text-container">
                <h3 className="accordion-heading">Gear Up and Catch More</h3>
                <p className="accordion-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                <div>
                  <Button variant="contained" className="learn-more-btn">Learn more</Button>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FeatureOptionSection;
