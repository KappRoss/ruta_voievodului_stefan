import React from 'react';
import './about.css';
import {connect} from "react-redux";
import romania from "../../lib/romania";

 const About = ({ locId, cur }) => {
  return(
  <div className="about">
    <div className="about-title">
      {romania[locId].titles[cur]}
    </div>
    <img src={romania.img[cur]} alt={romania[locId].titles[cur]}/>
    <div className="about-text">
      
      {romania[locId].texts[cur].map((k, i) => 
        <div
          className="about-par"
          key={k}
        >
          {k}
        </div>
      )}
      <div className="about-stub" />
    </div>
    <div className="about-bottom" />
  </div>
)
}

const mapStateToProps = ({
  settings: {
    activeAttraction
  }
}) => ({ cur: activeAttraction});

export default connect(mapStateToProps, {})(About)