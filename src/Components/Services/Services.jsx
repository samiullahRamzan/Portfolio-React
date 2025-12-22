import React, { useState } from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import Title from '../Title/Title';
import ServiceCard from '../ServiceCard';

const Services = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
  
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div id="services" className="services">
      <Title name="My Services" />
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
