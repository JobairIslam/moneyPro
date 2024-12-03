import React from 'react';

const Hero = () => {
  return (
    <div>
        <div className="pt-12 md:pt-[176px] bg-white">
      <div className="container px-5 mx-auto xl:px-0">
        <div className='flex flex-col items-center justify-center'>
             <span
            
            className="inline-block px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out border border-gray-200 rounded-full bg-transparent  text-gray-800"
          >
            Unlimited Leads, Unlimited Outreach, Unlimited Growth
          </span>
          
        <div className="mt-4 flex justify-center items-center flex-col text-center md:text-center">
          <h1
            className="lg:text-7xl md:text-7xl md:leading-[80px] text-5xl lg:leading-[80px] leading-[60px] font-semibold flex flex-col">
            <span className="text-gray-900">Attract and Win Your</span>
            <span className="gd-title">Perfect Customers</span>
          </h1>
          <p className="mt-4 max-w-[530px] font-normal text-xl text-gray-800 ">
          The first unlimited B2B leads and AI outreach platform with
          170M+ verified contacts to reach anyone, anytime.
          </p>
          <div className="mt-8 mb-24 flex justify-center  md:flex-row gap-4">
            
            <a href="#"
              className="px-6 border border-border-w rounded-full py-3 bg-gd-title text-white font-semibold lg:text-lg text-[14px] flex flex-row justify-center items-center transition-shadow duration-200 hover:shadow-xl">
              Sign Up For Free
              
            </a>
            <a href="#"
              className="px-6 border boder-gray-200 rounded-full py-3 bg-gd-primary text-gray-900 font-semibold lg:text-lg text-[14px] flex flex-row justify-center items-center hover:shadow-xl">
              Request A Demo
              

            </a>

          </div>
          <img src="/img/hero-img.png" alt="" />
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
