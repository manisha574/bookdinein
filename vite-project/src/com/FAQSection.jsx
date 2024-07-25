import React from 'react';

export default function FAQSection() {
  return (
    <div className="flex justify-between items-stretch mt-16">
      <div className="m-12 w-1/2 p-5 rounded-2xl bg-white border border-gray-300 box-border">
        <p className="text-3xl font-semibold leading-9 text-left mb-2.5">
          Have Queries?
        </p>
        <p className="text-2xl font-normal leading-9 text-left ">
          We know there's a lot here. If you have more questions, visit our FAQ page for more information.
        </p>
        <a href="#" className="text-2xl font-normal leading-9 text-left text-red-700 no-underline hover:underline  mt-3">
          Read FAQ’s
        </a>
      </div>
      <div className="m-12 w-1/2 p-5 rounded-2xl bg-white border border-gray-300 box-border">
        <p className="text-3xl font-semibold leading-9 text-left mb-2.5">
          Sample Documentations
        </p>
        <p className="text-2xl font-normal leading-9 text-left">
          Take a look under the hood at some example API calls that you'll get access to once you become an approved partner.
        </p>
        <a href="#" className="text-2xl font-normal leading-9 text-left text-red-700 no-underline hover:underline">
          See Documentation
        </a>
      </div>
    </div>
  );
}
