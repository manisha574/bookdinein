import React from 'react'

const Column = ({ bgColor, title, content,titlecolor}) => {
    return (
        <div className={`p-4 ${bgColor} flex flex-col  items-center`}>
           
           <div className='text-center p-4 w-2/4  '> <p className={`font-customFont  font-semibold ${titlecolor} `}> {title}</p></div>
            <div><p className={` ${titlecolor} font-customFont font-normal`} > { content }</p></div>
        </div>
    );
    
};
export default Column;
