import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Title.css';

const Title = ({name}) => {
  return (
    <div className="title">
        <h1>{name}</h1>
        <img src={theme_pattern} alt="" />
    </div>
  )
}

export default Title