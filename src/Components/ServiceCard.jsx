import React from 'react';
import './Services/Services.css';
import arrow_icon from '../assets/arrow_icon.svg';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <div className={`services-format ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded && (
        <>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
        </>
      )}
      <p>{service.s_desc}</p>

      <div className="services-readmore" onClick={onToggle}>
        <p>{isExpanded ? 'Read Less' : 'Read More'}</p>
        {!isExpanded && <img src={arrow_icon} alt="" />}
      </div>
    </div>
  );
};

export default ServiceCard;
