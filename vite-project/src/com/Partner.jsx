// src/components/PartnerForm.js
import React from 'react';

const PartnerForm = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="font-poppins text-3xl font-bold leading-11 text-black underline">BECOME A PARTNER</h1>
            <p className="text-2xl font-normal leading-10 text-center">BookMyDine is currently only approving new partners on a case-by-case basis. Please complete the form below. If approved, we'll get back to you as soon as possible. Are you a restaurateur?</p>
            <form className="space-y-6">
                {/* Applicant Details */}
                <fieldset className="border p-4 rounded-lg">
                    <legend className="font-poppins text-2xl font-bold leading-10 text-[#AC1501] mb-2">Applicant Details</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" id="name" name="name" placeholder="Your name" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="email" id="email" name="email" placeholder="Email ID" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="tel" id="phone" name="phone" placeholder="Phone No" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                    </div>
                </fieldset>

                {/* Organization Details */}
                <fieldset className="border p-4 rounded-lg">
                    <legend className="font-poppins text-2xl font-bold leading-10 text-[#AC1501] mb-2">Organization Details</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" id="companyName" name="companyName" placeholder="Company name" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="website" name="website" placeholder="Company Website Link" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="address1" name="address1" placeholder="Address 1" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="address2" name="address2" placeholder="Address 2" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="city" name="city" placeholder="City" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="country" name="country" placeholder="Country" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="state" name="state" placeholder="State/Region" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="zip" name="zip" placeholder="ZIP/Postal Code" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="primaryCountry" name="primaryCountry" placeholder="Primary Country of Operation" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="yearsInBusiness" name="yearsInBusiness" placeholder="Years in Business" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                    </div>
                </fieldset>

                {/* Product Details */}
                <fieldset className="border p-4 rounded-lg">
                    <legend className="font-poppins text-2xl font-bold leading-10 text-[#AC1501] mb-2">Product Details</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" id="productLive" name="productLive" placeholder="Is the Product Live?" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="type" name="type" placeholder="Type" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="text" id="industry" name="industry" placeholder="Industry" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="number" id="activeUsersMonthly" name="activeUsersMonthly" placeholder="No. of Active App Users (Monthly)" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="number" id="activeUsers" name="activeUsers" placeholder="No. of Active App Users" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                        <input type="number" id="restaurantUsers" name="restaurantUsers" placeholder="No. of Restaurant Users" className="border rounded-lg p-2 w-full h-14 border-[#CCCCCC]" />
                    </div>
                </fieldset>

                {/* Ideal Partnerships */}
                <div className="border p-4 rounded-lg">
                    <label htmlFor="partnershipDescription" className="block font-poppins text-xl font-bold leading-10 mb-2">Describe the Ideal Partnerships</label>
                    <textarea id="partnershipDescription" placeholder="Describe the Ideal Partnerships" className="border rounded-lg p-2 w-full h-32"></textarea>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="form-checkbox h-5 w-5" />
                    <label htmlFor="terms" className="text-lg font-medium text-gray-700">I have read and understood all the terms and conditions.</label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-[#AC1501] text-white py-2 px-4 rounded-lg hover:bg-[#9B1400] transition-colors">SUBMIT APPLICATION</button>
            </form>
        </div>
    );
};

export default PartnerForm;
