import React from 'react';
import groupImage from '../img/Group 1.png';
import '../App.css';

export default function Sec_1() {
  return (
    <div 
      className='relative bg-cover bg-center h-[calc(100vh*5/6)]   flex items-center'
      style={{ backgroundImage: `url(${groupImage})` }}
    >
     
       <div className='ml-20 w-64 h-52'>
        <p className='text-white font-customFont font-semibold text-4xl leading-tight  drop-shadow-2xl'>
          LET<br />
          BookMyDine<br />
          Give a Boost<br />
          To Your<br />
          BUSINESS
        </p>
        </div >
         
      
    </div>
  );
}
