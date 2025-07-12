'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

interface ProjectProps {
  project: Project;
  index: number;
}

export default function Projects({ project, index }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className='group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      <CardContent className='p-0'>
        <div className='relative h-48 overflow-hidden'>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <div className='flex gap-4'>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110'
              >
                <ExternalLink className='w-5 h-5 text-white' />
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110'
              >
                <Github className='w-5 h-5 text-white' />
              </a>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300'>
            {project.title}
          </h3>
          <p className='text-gray-400 mb-4 line-clamp-2'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2'>
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tag}
                className='px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-600/30 transition-all duration-300 hover:bg-purple-600/30'
                style={{
                  animationDelay: `${index * 0.1 + tagIndex * 0.05}s`,
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className='px-3 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full border border-gray-600/30'>
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
