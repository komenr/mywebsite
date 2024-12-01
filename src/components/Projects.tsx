import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
  demo
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}) => (
  <div className="group relative rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex business metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      tech: ['Python', 'D3.js', 'Flask', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'AI-Powered Chat App',
      description: 'Real-time chat application with AI-powered response suggestions.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60',
      tech: ['Next.js', 'OpenAI', 'WebSocket', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;