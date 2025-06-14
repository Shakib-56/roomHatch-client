import React, { useEffect, useState, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import bgTestiMonial from "../../assets/bg-testemonial.webp"

const GlidCarousal = () => {
  const [tasteMonial, setTasteMonial] = useState([]);
  const glideRef = useRef(null); 

  // Load testimonials
  useEffect(() => {
    fetch('/tasteMonial_data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then((data) => setTasteMonial(data))
      .catch((err) => console.error('Failed to load testimonials:', err));
  }, []);

  useEffect(() => {
    if (tasteMonial.length > 0 && glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 5000,
        animationDuration: 900,
        gap: 24,
        classes: {
          activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
          1024: { perView: 2 },
          640: { perView: 1 },
        },
      });

      glide.mount();

      return () => glide.destroy();
    }
  }, [tasteMonial]);

  return (
    <div className=' bg-cover p-10 bg-center w-full h-full' style={{backgroundImage:`url(${bgTestiMonial})`}}>
        <h2 className='text-4xl text-center py-4 font-bold text-red-600'>Testimonials</h2>
         <div className="relative   mx-auto   lg:px-20 lg:py-15 glide-05 " ref={glideRef}>
      {/* Slides */}
      <div className="overflow-hidden  " data-glide-el="track">
        <ul className="flex">
          {tasteMonial.map((item) => (
            <li key={item.id}>
              <div className="overflow-hidden bg-white rounded-lg border-1 border-red-100 shadow-3xl hover:bg-red-100 text-slate-500 shadow-slate-200">
                <div className="relative p-6">
                    <RiDoubleQuotesL size={30} className='opacity-10' />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover"
                  />
                  <figure className="relative z-10 text-center">
                    <blockquote className="p-6 relative text-lg leading-relaxed ">
                      <RiDoubleQuotesL size={30} className='opacity-30 absolute top-3 left-1' /><p>{item.quote}</p><RiDoubleQuotesR size={30} className='opacity-30 absolute bottom-3 right-2' />
                    </blockquote>
                    <figcaption className="flex flex-col items-center gap-1 text-sm text-emerald-500">
                      <span className="font-bold uppercase">{item.name}</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Indicators */}
      <div
        className="flex items-center justify-center w-full gap-2 mt-4"
        data-glide-el="controls[nav]"
      >
        {tasteMonial.map((_, i) => (
          <button
            key={i}
            className="p-4 group"
            data-glide-dir={`=${i}`}
            aria-label={`goto slide ${i + 1}`}
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-700 bg-white/20 focus:outline-none"></span>
          </button>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default GlidCarousal;
