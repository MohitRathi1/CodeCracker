import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BookOpen, Linkedin } from 'lucide-react'; 
import manav from '/assets/manav1.jpg';
import mohit from '/assets/mohit.jpg';
import harshal from '/assets/harshal.jpg';
import ashis from '/assets/ashis.jpg';
import girl from '/assets/girl.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Manav Patni',
      role: 'President',
      image: `${manav}?&w=400`,
      description: 'Full-stack developer with a passion for teaching and community building.',
      linkedin: 'https://in.linkedin.com/in/manavpatni',
    },
    {
      name: 'Harshal Suryavanshi',
      role: 'Vice President',
      image: `${harshal}?&w=400`,
      description: 'AI enthusiast and competitive programmer with multiple hackathon wins.',
      linkedin: 'https://in.linkedin.com/in/harshal-suryavanshi-developer', 
    },
    {
      name: 'Mohit Rathi',
      role: 'Technical Lead',
      image: `${mohit}?&w=400`,
      description: 'Web Developer frontend using Tech stack React and laravel.',
      linkedin: 'https://in.linkedin.com/in/mohit-rathi-a2745a290', 
    },
    {
      name: 'Ashis',
      role: 'Mentor',
      image: `${ashis}?&w=400`,
      description: 'Student mentor Technical Head.',
      linkedin: 'https://www.linkedin.com/in/', 
    },
    {
      name: 'Sidhika Patil',
      role: 'Mentor',
      image: `${girl}?&w=400`,
      description: 'Student mentor Technical Head.',
      linkedin: 'https://www.linkedin.com/in/', 
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#54ae90' }}>
            Our Mission
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" style={{ color: '#aedce2' }} />,
                title: 'Vision',
                description: 'To create a thriving community of innovative developers who push the boundaries of technology.',
              },
              {
                icon: <BookOpen className="h-8 w-8" style={{ color: '#aedce2' }} />,
                title: 'Purpose',
                description: 'Providing hands-on learning experiences and mentorship to aspiring developers.',
              },
              {
                icon: <Users className="h-8 w-8" style={{ color: '#aedce2' }} />,
                title: 'Community',
                description: 'Building a supportive network of tech enthusiasts who learn and grow together.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#54ae90' }}>
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#54ae90' }}>
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden flex flex-col" 
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-grow"> 
                  <h3 className="text-xl font-semibold mb-1" style={{ color: '#aedce2' }}>
                    {member.name}
                  </h3>
                  <p className="mb-3" style={{ color: '#54ae90' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
                {member.linkedin && (
                  <div className="p-6 pt-0"> 
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;