import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm an Electrical and Electronics Engineering graduate from Sai Spurthi Institute of Technology with a CGPA of 8.2. My passion lies in web development and creating innovative solutions that make a difference.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">B.Tech in Electrical and Electronics Engineering</h4>
                  <p className="text-gray-600">Sai Spurthi Institute of Technology • CGPA: 8.2</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Experience</h3>
              <div className="flex items-start space-x-4">
                <Briefcase className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">Marketing Intern</h4>
                  <p className="text-gray-600">Pyzaql</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Promoted free courses to students</li>
                    <li>Data analysis using MS Excel</li>
                    <li>Market research and platform analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Personal Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={20} />
                  Quick learner with high adaptability
                </li>
                <li className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={20} />
                  Strong communication skills
                </li>
                <li className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={20} />
                  Reliable and empathetic
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Hobbies & Interests</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Playing cricket</li>
                <li>Listening to music</li>
                <li>Content creation (YouTube channel: AnimewNaruto)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;