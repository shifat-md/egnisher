import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonialsData } from '../../data/testimonialsData';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next Testimonial"
      className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-egnisher-primary hover:border-egnisher-primary transition-all focus:outline-none focus:ring-2 focus:ring-egnisher-primary"
    >
      <FaChevronRight className="w-3.5 h-3.5" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous Testimonial"
      className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-egnisher-primary hover:border-egnisher-primary transition-all focus:outline-none focus:ring-2 focus:ring-egnisher-primary"
    >
      <FaChevronLeft className="w-3.5 h-3.5" />
    </button>
  );
}

export default function TestimonialsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-4 sm:px-6">
      <Slider {...settings}>
        {testimonialsData.map((item) => (
          <div key={item.id} className="p-3">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between h-full min-h-[290px] relative">
              <div className="absolute top-6 right-6 text-purple-200 text-3xl">
                <FaQuoteLeft />
              </div>

              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-egnisher-light"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.author}</h4>
                  <p className="text-xs text-egnisher-neutral">{item.role}</p>
                  <p className="text-xs font-semibold text-egnisher-primary">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
