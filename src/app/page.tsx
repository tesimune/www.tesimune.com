'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { projects, experience, skills } from '@/components/data/projects'
import { Github, LinkedinIcon, MailIcon, ExternalLinkIcon, DownloadIcon } from 'lucide-react'
import { InstagramIcon, TwitterIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black xl:px-28">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '200% 200%'],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="container mx-auto px-4 py-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              variants={fadeInUp}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10"
            >
              <Image
                src="/profile.png"
                alt="Teslim Abdulwahab"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                Teslim Abdulwahab
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-6"
              >
                Senior Software Engineer | Full Stack Developer
              </motion.p>
              <motion.div 
                variants={staggerChildren}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                {[
                  { icon: Github, href: "https://github.com/tesimune" },
                  { icon: LinkedinIcon, href: "https://linkedin.com/in/tesimune" },
                  { icon: TwitterIcon, href: "https://twitter.com/tesimune" },
                  { icon: InstagramIcon, href: "https://instagram.com/tesimune" },
                  // { icon: FacebookIcon, href: "https://facebook.com/tesimune" },
                  { 
                    icon: () => (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    ),
                    href: "https://wa.me/2348067988642"
                  },
                  { icon: PhoneIcon, href: "tel:+2348067988642" },
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Button variant="outline" size="icon" asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
                <motion.div variants={fadeInUp}>
                  <Button variant="outline" asChild>
                    <a href="/tesimune.pdf" download>
                      <DownloadIcon className="h-5 w-5 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <motion.div key={project.id} variants={fadeInUp}>
                    <Card className="overflow-hidden bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className='m-4'>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="m-5">
                        <h3 className="text-xl font-bold text-white mb-2 uppercase">{project.title}</h3>
                        <p className="text-gray-300 h-10 mb-4">{project.description}</p>
                        <div className='h-16'>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" className="w-full" onClick={() => window.open(project.link, '_blank')}>
                          View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="experience">
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {experience.map((exp) => (
                  <motion.div key={exp.id} variants={fadeInUp}>
                    <Card className="p-6 bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white uppercase mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-gray-300 mb-2 uppercase">{exp.company}</h4>
                      <p className="text-gray-400 mb-2">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills">
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div key={category} variants={fadeInUp}>
                    <Card className="h-48 p-6 bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} >{skill}</Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="contact">
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <Card className="p-6 bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    {[
                      { icon: MailIcon, text: "tesimune@gmail.com", href: "mailto:tesimune@gmail.com" },
                      { icon: LinkedinIcon, text: "linkedin.com/in/tesimune", href: "https://linkedin.com/in/tesimune" },
                      { icon: TwitterIcon, text: "twitter.com/tesimune", href: "https://twitter.com/tesimune" },
                      { icon: InstagramIcon, text: "instagram.com/tesimune", href: "https://instagram.com/tesimune" },
                      { icon: PhoneIcon, text: "+234 806 798 8642", href: "tel:+2348067988642" },
                      // { icon: FacebookIcon, text: "facebook.com/tesimune", href: "https://facebook.com/tesimune" },
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <item.icon className="h-5 w-5" />
                        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.text}</a>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="container mx-auto px-4 py-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Teslim Abdulwahab. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}