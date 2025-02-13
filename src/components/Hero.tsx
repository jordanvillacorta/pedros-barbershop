import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://d2zdpiztbgorvt.cloudfront.net/region1/us/533995/biz_photo/3376f71fa1ca4e5987abe82454834c-pedro-s-barbershop-biz-photo-f08a7cf45e5549a8b2e8083daa4dd6-booksy.jpeg?size=640x427')",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16">
        <img 
          src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/533995/logo/a6335cb701b346d9a96adfdafd0a51-pedro-s-barbershop-logo-7f2d6777d972410992271a5e2643c9-booksy.jpeg?size=150x150"
          alt="Pedro's Barbershop Logo"
          className="w-32 h-32 mb-6 rounded-full border-4 border-pr-red"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-pr-white mb-4">
          Pedro's Barbershop
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Premier Barbershop in Olathe, KS
        </p>
        <a 
          href="https://booksy.com/en-us/533995_pedro-s-barbershop_barber-shop_20362_olathe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pr-red text-pr-white px-8 py-3 rounded-lg font-semibold hover:bg-pr-blue transition duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}