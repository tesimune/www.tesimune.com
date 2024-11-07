'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { projects, experience, skills } from '@/components/data/projects'
import { LinkedinIcon, MailIcon, ExternalLinkIcon, DownloadIcon } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 xl:px-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10"
          >
            <Image
              src="profile.png"
              alt="Teslim Abdulwahab"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Teslim Abdulwahab
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-6"
            >
              Senior Software Engineer | Full Stack Developer
            </motion.p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button variant="outline" size="icon" asChild>
                <a href="https://facebook.com/tesimune" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com/tesimune" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/tesimune" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/tesimune" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://wa.me/2348067988642" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:+2348067988642">
                  <PhoneIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/tesimune.pdf" download>
                  <DownloadIcon className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden bg-gray-800/50 border-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <div className="space-y-6">
              {experience.map((exp) => (
                <Card key={exp.id} className="p-6 bg-gray-800/50 border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                  <h4 className="text-lg text-gray-300 mb-2 uppercase">{exp.company}</h4>
                  <p className="text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="p-6 bg-gray-800/50 border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4 uppercase">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MailIcon className="h-5 w-5" />
                  <a href="mailto:tesimune@gmail.com">tesimune@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <PhoneIcon className="h-5 w-5" />
                  <a href="tel:+2348067988642">+234 806 798 8642</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FacebookIcon className="h-5 w-5" />
                  <a href="https://facebook.com/tesimune" target="_blank" rel="noopener noreferrer">facebook.com/tesimune</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <InstagramIcon className="h-5 w-5" />
                  <a href="https://instagram.com/tesimune" target="_blank" rel="noopener noreferrer">instagram.com/tesimune</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <TwitterIcon className="h-5 w-5" />
                  <a href="https://twitter.com/tesimune" target="_blank" rel="noopener noreferrer">twitter.com/tesimune</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <LinkedinIcon className="h-5 w-5" />
                  <a href="https://linkedin.com/in/tesimune" target="_blank" rel="noopener noreferrer">linkedin.com/in/tesimune</a>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2024 Teslim Abdulwahab. All rights reserved.</p>
      </footer>
    </div>
  )
}