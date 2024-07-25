import React from 'react'
import  bg from '../img/10 restaurants in Mumbai that offer the best sunset views 1.png'

export default function Sect_4() {
  return (
    <div  style={{ backgroundImage: `url(${bg})` }} className='h-670 mt-20 flex bg-no-repeat  bg-cover '>
     
      <div CLASS=" bg-white w-fit h-fit p-5 mt-14 ml-12 text-center  rounded-3xl   ">
            <p className='font-semibold text-3xl leading-9 text-red-700 p-2'>
                BE A PART OF JOURNEY
            </p>
          
            <p className='text-2xl font-normal leading-10 whitespace-pre-wrap '>
                Accomplices are organizations who have<br/>
                admittance to explicit mixes. They<br/>
                either use answers for interface their<br/>
                items to BookMyDine's eatery<br/>
                content to give their clients the capacity<br/>
                to find and book tables or to<br/>
                incorporate with OpenTable's table<br/>
                the board stage to give their<br/>
                eatery clients a smoothed out<br/>
                offering. Click underneath to begin.<br/>
            </p>
            <button className='bg-red-700 p-4 m-4 font-medium rounded-xl'>APPLY NOW</button>
      </div>
    </div>
  )
}
