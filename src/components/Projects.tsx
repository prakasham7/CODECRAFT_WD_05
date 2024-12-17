import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../utils/constants';
import type { Project } from '../utils/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
          <Github className="mr-2" size={20} />
          Code
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
          <ExternalLink className="mr-2" size={20} />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;