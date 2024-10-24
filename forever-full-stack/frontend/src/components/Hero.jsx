import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const carouselImages = [
    assets.banner1, // First image
    assets.banner2, // Second image
    assets.banner3, // Third image
    assets.banner4, // Fourth image
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className='relative overflow-hidden border border-gray-400 h-[500px]'>
      {/* Carousel Container */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${carouselImages.length * 100}%`,
        }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className='flex-shrink-0 w-full h-full'>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-contain' // Use object-contain to fit images without distortion
              style={{ maxHeight: '500px', width: 'auto' }} // Ensure proper scaling
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {carouselImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-black' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
