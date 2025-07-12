'use client';

import { useEffect, useRef, useState } from 'react';
import { experience } from '@/lib/database';

interface ExperienceProps {
  item: (typeof experience)[0];
  index: number;
  isVisible: boolean;
}

function Experience({ item, index, isVisible }: ExperienceProps) {
  return (
    <div
      className={`relative flex items-center mb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className='flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 relative z-10'>
        <div className='absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-75'></div>
      </div>

      <div className='ml-6 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 w-full'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
          <h3 className='text-xl font-bold text-white'>{item.position}</h3>
          <span className='text-purple-400 font-medium'>{item.period}</span>
        </div>
        <h4 className='text-lg text-purple-300 mb-2'>{item.company}</h4>
        <p className='text-gray-400'>{item.description}</p>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(experience.length).fill(false)
  );
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold text-center text-white mb-16'>
          Experience
        </h2>

        <div ref={timelineRef} className='relative max-w-4xl mx-auto'>
          <div className='absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600'></div>

          {experience.map((item, index) => (
            <div key={item.id} data-index={index}>
              <Experience
                item={item}
                index={index}
                isVisible={visibleItems[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
