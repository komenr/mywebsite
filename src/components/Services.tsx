import React from 'react';
import { Code, Database, LineChart, Globe, Server, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-100">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and scalable web applications using modern technologies and best practices.'
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Transforming raw data into meaningful insights to drive business decisions.'
    },
    {
      icon: LineChart,
      title: 'Tech Consulting',
      description: 'Providing strategic guidance for digital transformation and technology implementation.'
    },
    {
      icon: Globe,
      title: 'API Integration',
      description: 'Seamlessly connecting systems and services through robust API implementations.'
    },
    {
      icon: Server,
      title: 'Remote & Onsite Teaching',
      description: 'Bridging Learning Beyond Boundaries: Engaging Minds, Anywhere, Anytime.'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Empowering teams with technical knowledge and best practices.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;