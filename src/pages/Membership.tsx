import React from 'react';
import { motion } from 'framer-motion';

const syllabusData = [
  {
    year: 'Python Programming',
    weeks: [
      { week: 'Week 1', topic: 'Orientation & Python Environment Setup', details: 'Installing Python, VS Code, IDE usage' },
      { week: 'Week 2–4', topic: 'Core Python Programming', details: 'Variables, Data Types, Loops, Functions, Data Structures' },
      { week: 'Week 5', topic: 'Mini Project #1', details: 'CLI-based application' },
      { week: 'Week 6–8', topic: 'Intermediate Python', details: 'File Handling, OOP, Libraries: math, datetime, etc.' },
      { week: 'Week 9–12', topic: 'Final Project', details: 'Team-based project (Student Data Manager, Expense Tracker)' },
      { week: 'Week 12', topic: 'Project Showcase & Feedback', details: 'Presentations, Mentor/Faculty feedback' },
    ],
  },
  {
    year: 'Web Development Track',
    weeks: [
      { week: 'Week 1–2', topic: 'JavaScript & DOM Manipulation', details: 'ES6+, Async, Fetch API, DOM Operations' },
      { week: 'Week 3–5', topic: 'React.js Development', details: 'Components, Props, State, Hooks, Routing' },
      { week: 'Week 6', topic: 'Mini Project #1', details: 'Hands-on mini app using React' },
      { week: 'Week 7–10', topic: 'Backend Development', details: 'Node.js, Express.js, REST APIs, MongoDB/MySQL' },
      { week: 'Week 11–12', topic: 'Full-Stack Project', details: 'MERN App (Blog, Task Manager, Resume Builder)' },
      { week: 'Week 12', topic: 'Project Demo & Review', details: 'GitHub upload, Peer review, Portfolio updates' },
    ],
  },
];

const Membership = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#54ae90' }}>
            Code Crackers Syllabus
          </h1>

          {syllabusData.map((section, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#aedce2' }}>
                {section.year}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-700 text-sm md:text-base">
                  <thead style={{ backgroundColor: '#222' }}>
                    <tr>
                      <th className="text-left px-4 py-3 border-b border-gray-700 text-[#54ae90]">Week</th>
                      <th className="text-left px-4 py-3 border-b border-gray-700 text-[#54ae90]">Topic</th>
                      <th className="text-left px-4 py-3 border-b border-gray-700 text-[#54ae90]">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.weeks.map((week, i) => (
                      <tr key={i} className="hover:bg-gray-800 transition">
                        <td className="px-4 py-3 border-b border-gray-700 text-gray-300">{week.week}</td>
                        <td className="px-4 py-3 border-b border-gray-700 text-gray-300">{week.topic}</td>
                        <td className="px-4 py-3 border-b border-gray-700 text-gray-400">{week.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default Membership;
