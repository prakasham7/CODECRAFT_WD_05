import React from 'react';
import { Code, Wrench } from 'lucide-react';
import { SKILLS } from '../utils/constants';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Code className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.technical.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Wrench className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.softSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;