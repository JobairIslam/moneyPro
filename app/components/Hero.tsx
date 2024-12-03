
import React from 'react';

const Hero = () => {
  return (
    <div>
        <div className="py-24 md:pt-[176px] bg-white">
      <div className="container px-5 mx-auto xl:px-0">
        <div className='flex flex-col items-center justify-center'>
             <span
            
            className="mt-4 inline-block px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out border border-gray-200 rounded-full bg-transparent  text-gray-700"
          >
            Unlimited Leads, Unlimited Outreach, Unlimited Growth
          </span>
          
        <div className=" text-center md:text-center">
          <h1
            className="lg:text-7xl md:text-7xl md:leading-[96px] text-5xl lg:leading-[96px] leading-[60px] font-semibold flex flex-col">
            <span className="text-gray-950">Attract and Win Your</span>
            <span className="gd-title">Perfect Customers</span>
          </h1>
          <p className="max-w-[611px] font-normal text-lg mt-6 text-gray-700 ">
          The first unlimited B2B leads and AI outreach platform with
          170M+ verified contacts to reach anyone, anytime.
          </p>
          <div className="mt-8 flex justify-center  md:flex-row gap-4">
            <a href="#"
              className="px-6 border border-border-w rounded-full py-3 bg-gd-primary text-w-900 font-semibold lg:text-lg text-[14px] flex flex-row justify-center items-center hover:shadow-xl">
              Start Free Trial
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>

            </a>
            <a href="#"
              className="px-6 border border-gray-950 rounded-full py-3 bg-transparent text-gray-950 font-semibold lg:text-lg text-[14px] flex flex-row justify-center items-center transition-shadow duration-200 hover:shadow-xl">
              Contact Us
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>

          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
