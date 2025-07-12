'use client';

import { useEffect, useRef, useState } from 'react';
import { skills } from '@/lib/database';
import {
  Code2,
  Database,
  Server,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Wrench,
  Layers,
  FileCode,
  Zap,
  Box,
  Settings,
  Monitor,
  Workflow,
  Binary,
  Braces,
  Hash,
  Coffee,
  Figma,
} from 'lucide-react';

// Icon mapping for different technologies
const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();

  // Frontend technologies
  if (skillLower.includes('html')) return <Globe className='w-5 h-5' />;
  if (skillLower.includes('css')) return <Palette className='w-5 h-5' />;
  if (skillLower.includes('javascript'))
    return <FileCode className='w-5 h-5' />;
  if (skillLower.includes('typescript')) return <Code2 className='w-5 h-5' />;
  if (skillLower.includes('react')) return <Layers className='w-5 h-5' />;
  if (skillLower.includes('next')) return <Zap className='w-5 h-5' />;
  if (skillLower.includes('vue')) return <Box className='w-5 h-5' />;
  if (skillLower.includes('tailwind')) return <Palette className='w-5 h-5' />;
  if (skillLower.includes('bootstrap')) return <Palette className='w-5 h-5' />;
  if (skillLower.includes('native')) return <Smartphone className='w-5 h-5' />;
  if (skillLower.includes('shadcn')) return <Layers className='w-5 h-5' />;

  // Backend technologies
  if (skillLower.includes('php')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('laravel')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('node')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('express')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('nest')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('django')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('flask')) return <Server className='w-5 h-5' />;
  if (skillLower.includes('fastapi')) return <Zap className='w-5 h-5' />;
  if (skillLower.includes('java')) return <Coffee className='w-5 h-5' />;
  if (skillLower.includes('spring')) return <Coffee className='w-5 h-5' />;

  // Database technologies
  if (skillLower.includes('mysql')) return <Database className='w-5 h-5' />;
  if (skillLower.includes('postgresql'))
    return <Database className='w-5 h-5' />;
  if (skillLower.includes('mariadb')) return <Database className='w-5 h-5' />;
  if (skillLower.includes('mongodb')) return <Database className='w-5 h-5' />;
  if (skillLower.includes('redis')) return <Database className='w-5 h-5' />;
  if (skillLower.includes('firebase')) return <Database className='w-5 h-5' />;
  if (skillLower.includes('supabase')) return <Database className='w-5 h-5' />;

  // DevOps technologies
  if (skillLower.includes('git')) return <GitBranch className='w-5 h-5' />;
  if (skillLower.includes('docker')) return <Box className='w-5 h-5' />;
  if (skillLower.includes('aws')) return <Cloud className='w-5 h-5' />;
  if (skillLower.includes('google')) return <Cloud className='w-5 h-5' />;
  if (skillLower.includes('azure')) return <Cloud className='w-5 h-5' />;
  if (skillLower.includes('ci/cd')) return <Workflow className='w-5 h-5' />;

  // Programming languages
  if (skillLower.includes('python')) return <Binary className='w-5 h-5' />;
  if (skillLower.includes('c++')) return <Braces className='w-5 h-5' />;
  if (skillLower === 'c') return <Hash className='w-5 h-5' />;

  // Others
  if (skillLower.includes('figma')) return <Figma className='w-5 h-5' />;
  if (skillLower.includes('linux')) return <Terminal className='w-5 h-5' />;
  if (skillLower.includes('arduino')) return <Cpu className='w-5 h-5' />;
  if (skillLower.includes('iot')) return <Cpu className='w-5 h-5' />;

  // Default icon
  return <Code2 className='w-5 h-5' />;
};

interface SkillCategoryProps {
  title: string;
  skillList: string[];
  index: number;
  isVisible: boolean;
}

function SkillCategory({
  title,
  skillList,
  index,
  isVisible,
}: SkillCategoryProps) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Monitor className='w-6 h-6' />;
      case 'backend':
        return <Server className='w-6 h-6' />;
      case 'database':
        return <Database className='w-6 h-6' />;
      case 'devops':
        return <Cloud className='w-6 h-6' />;
      case 'languages':
        return <Code2 className='w-6 h-6' />;
      case 'others':
        return <Wrench className='w-6 h-6' />;
      default:
        return <Settings className='w-6 h-6' />;
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className='flex items-center gap-3 mb-4'>
        <div className='text-purple-400'>{getCategoryIcon(title)}</div>
        <h3 className='text-xl font-bold text-purple-400 capitalize'>
          {title}
        </h3>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        {skillList.map((skill, skillIndex) => (
          <div
            key={skill}
            className='flex items-center gap-2 px-3 py-2 text-sm bg-purple-600/10 text-purple-300 rounded-lg border border-purple-600/20 hover:bg-purple-600/20 hover:border-purple-600/40 transition-all duration-300 transform hover:scale-105 cursor-default'
            style={{
              animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
            }}
          >
            <div className='text-purple-400 flex-shrink-0'>
              {getSkillIcon(skill)}
            </div>
            <span className='truncate'>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = Object.entries(skills);

  return (
    <section ref={sectionRef} className='py-20 bg-black'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {skillCategories.map(([category, skillList], index) => (
            <SkillCategory
              key={category}
              title={category}
              skillList={skillList}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
