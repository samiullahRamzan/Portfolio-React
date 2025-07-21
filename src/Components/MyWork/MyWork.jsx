import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import  mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import Title from '../Title/Title'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <Title name='My latest work' />
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img src={work.w_img} alt=''/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork