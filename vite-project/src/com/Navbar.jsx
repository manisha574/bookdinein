import React, { useState } from 'react';
import logo from '../img/logo.png'; 
import logologin from '../img/Vector.png'; // Correctly import your login logo
import { IoIosArrowDown } from "react-icons/io";
const navigation = [
  { name: 'Our Offerings', href: '#', current: false ,showarrow:true},
  { name: 'Why Choose Us', href: '#', current: false ,showarrow:true},
  { name: 'Plans & Pricing', href: '#', current: false,showarrow:true },
  { name: 'Explore more', href: '#', current: false ,showarrow:true},
  { name: 'Login', href: '#', current: false, img: logologin,showarrow:false }, // Correctly set the image property
  { name: 'SaaS', href: '#', current: false, button: true, showarrow: false }, 
 
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar( {onSaaSClick}) {
  const [imgSrc, setImageSrc] = useState(logo);

  return (
    <nav className="bg-black h-24 flex items-center justify-between px-4">
      <div className="flex items-center">
        <ul className="flex items-center space-x-4">
          <li>
            <img src={imgSrc} alt="Logo" className="h-8" />
          </li>
          <li>
            <span className="text-white text-xl font-semibold">BOOKMYDINE</span>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex space-x-8">
        {navigation.map((item) => (
          item.button ? (
            <button
              key={item.name}
            
              onClick={onSaaSClick}
              className="bg-white text-black  px-4 py-2 text-sm font-medium hover:bg-red-600 w-24 h-8"
            >
              {item.name}
            </button>
          ) : (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? '' : 'text-gray-300 hover:underline font-poppins'
              )}
            >
              {item.img && (
                <img src={item.img} alt="Login" className="inline  mr-2 w-5 h-5" />
              )}
                {item.name}  {item.showarrow
                  && <IoIosArrowDown className='inline' />}
            </a>
          )
        ))}
      </div>
    </nav>
  );
}
