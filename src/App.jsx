import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'; // Updated imports for Heroicons v2
import './App.css'; // Add custom styles here if needed

const slides = [
  { title: "Video Consultations", color: "bg-blue-500", link: "/video-consultations" },
  { title: "Repair Services", color: "bg-green-500", link: "/repair-services" },
  { title: "Smart Connections", color: "bg-purple-500", link: "/smart-connections" },
  { title: "Shop", color: "bg-red-500", link: "/shop" },
  { title: "News", color: "bg-yellow-500", link: "/news" },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Slide changes every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Change slide on click of navigation buttons
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* Slideshow Section */}
      <div className="relative w-full h-1/2 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-black opacity-50" />
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full flex items-center justify-center text-white text-4xl font-semibold transition-opacity duration-1000 ease-in-out 
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transition: "opacity 1s ease-in-out", 
                zIndex: index === currentSlide ? 1 : -1, // Keep the current slide on top
              }}
            >
              <div className={`${slide.color} w-full h-full flex items-center justify-center text-white text-4xl font-semibold`}>
                {slide.title}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-0 bottom-0 left-4 p-2 cursor-pointer z-10 flex items-center justify-center" onClick={handlePrevSlide}>
          <ArrowLeftIcon className="w-10 h-10 text-white" />
        </div>
        <div className="absolute top-0 bottom-0 right-4 p-2 cursor-pointer z-10 flex items-center justify-center" onClick={handleNextSlide}>
          <ArrowRightIcon className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Feature Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 py-8">
        {slides.map((slide, index) => (
          <a href={slide.link} key={index} className="flex flex-col items-center p-6 bg-white shadow-xl rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className={`w-16 h-16 rounded-full ${slide.color} mb-4 flex items-center justify-center`}>
              {/* Example Icon: Change based on what you want */}
              <span className="text-white text-2xl">
                {index === 0 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4m0 0l4 4m-4-4v12" />
                </svg> : 
                index === 1 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l4 4-4 4M3 5h12m-9 8h7" />
                </svg> :
                index === 2 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                </svg> :
                index === 3 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M6 6h12a4 4 0 014 4v6a4 4 0 01-4 4H6a4 4 0 01-4-4V10a4 4 0 014-4z" />
                </svg> }
              </span>
            </div>
            <h3 className="text-lg font-medium">{slide.title}</h3>
            <p className="text-gray-600 mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
