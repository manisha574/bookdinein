import React from 'react';
import logo from '../img/logo.png';
import facebookIcon from '../img/logos_facebook.png';
import instagramIcon from '../img/skill-icons_instagram.png';
import paymentIcon1 from '../img/pngegg 3 (1).png';
import paymentIcon2 from '../img/pngegg 4 (1).png';

export default function Footer() {
  return (
    <footer>
      <div className="foote1 flex flex-wrap justify-between items-start p-8 bg-gray-100">
        <div className="f1 w-full sm:w-auto mb-8 sm:mb-0">
          <div className="logo flex items-center mb-4">
            <img src={logo} alt="BookMyDine Logo" className="mr-2" />
            <span id="f11" className="text-2xl font-bold">BOOKMYDINE</span>
          </div>
          <div className="fte text-base leading-6 mb-4">
            <p>A modern way of online table reservation with 360 degree walkaround.</p>
          </div>
          <div className="logo flex space-x-4">
            <div className="logo ff flex items-center">
              <img src={facebookIcon} alt="Facebook" className="mr-2" />
              <span className="fs">Facebook</span>
            </div>
            <div className="logo ff flex items-center">
              <img src={instagramIcon} alt="Instagram" className="mr-2" />
              <span className="fs">Instagram</span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-auto mb-8 sm:mb-0">
          <ul className="fte text-lg leading-9">
            <li className="mb-2">About us</li>
            <li className="mb-2">Contact us</li>
            <li className="mb-2">Help</li>
            <li className="mb-2">FAQs</li>
            <li className="mb-2">Pricing</li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-8 sm:mb-0">
          <ul className="fte text-lg leading-9">
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Cookie Policy</li>
            <li className="mb-2">Disclaimer</li>
          </ul>
        </div>

        <div id="end" className="flex space-x-4">
          <img src={paymentIcon1} alt="Payment Method 1" />
          <img src={paymentIcon2} alt="Payment Method 2" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <p className="text-center text-gray-500 font-poppins text-xs font-normal leading-6">
        &copy; All content on this site unless indicated are copyright material of BookMyDine
      </p>
    </footer>
  );
}
