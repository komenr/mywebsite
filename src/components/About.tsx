import React from 'react';
import { BookOpen, Code, Database } from 'lucide-react';

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-0 w-2 h-2 bg-cyan-500 rounded-full transform group-hover:scale-150 transition-transform duration-300"></div>
    <div className="absolute left-1 top-2 h-full w-[1px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
    <div className="text-sm text-cyan-400">{year}</div>
    <h3 className="text-lg font-semibold mt-1">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

const About = () => {
  const timeline = [
    {
      year: '2023-2024',
      title: 'Teacher (Educator)',
      description: 'Dedicated educator teaching CBC and A-Level curriculum, specializing in Mathematics, Computer Studies, Integrated Science, and Pre-Technical Studies. Focused on developing comprehensive understanding and practical skills in students.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      description: 'Developed scalable web applications and implemented data-driven solutions for various industries.'
    },
    {
      year: '2021',
      title: 'Data Analysis Specialist',
      description: 'Specialized in transforming complex data into actionable insights using advanced analytics tools.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate tech professional with expertise in web development, data analysis, technical consulting and a dedicated Teacher. 
              My mission is to bridge the gap between complex technology and practical business solutions.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Web Dev</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <Database className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Data Analysis</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Education</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Career Timeline</h3>
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;