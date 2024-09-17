import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url('https://your-image-url.com')` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-6">Welcome to MyPet</h1>
        <p className="text-xl mb-8">Your trusted source for all things pets.</p>
        <a
          href="#about"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
