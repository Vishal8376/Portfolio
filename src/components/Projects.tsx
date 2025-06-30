
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Github Profile Assignment",
      description: "A comprehensive portfolio website showcasing my skills, projects, and professional experience with modern web technologies and responsive design.",
      image: "photo-1498050108023-c5249f4df085",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Vishal8376/Github-Profile-Assignment",
      live: "#",
      date: "2024"
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive expense tracking application to manage personal finances with intuitive UI and data visualization features.",
      image: "photo-1554224155-6726b3ff858f",
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      github: "https://github.com/Vishal8376/Expense-Tracker",
      live: "#",
      date: "2024"
    },
    {
      title: "Music Player App",
      description: "A feature-rich music player application with playlist management, audio controls, and modern user interface design.",
      image: "photo-1493225457124-a3eb161ffa5f",
      technologies: ["HTML", "CSS", "JavaScript", "Web Audio API"],
      github: "https://github.com/Vishal8376/Music-Player-App",
      live: "#",
      date: "2024"
    },
    {
      title: "Todo List Application",
      description: "A dynamic todo list application with CRUD operations, task management, and local storage persistence for better productivity.",
      image: "photo-1484480974693-6ca0a78fb36b",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      github: "https://github.com/Vishal8376/Todo-List",
      live: "#",
      date: "2024"
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Github size={20} className="text-gray-700" />
                    </a>
                    <a href={project.live} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" asChild>
                    <a href={project.live}>
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
