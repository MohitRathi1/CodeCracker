import React from 'react';
import { motion } from 'framer-motion';

const syllabusData = [
  {
    year: 'AI/ML',
    weeks: [
      { week: 'Week 1', topic: 'Python & AI Basics', details: 'Python revision - AI overview - Supervised vs Unsupervised learning' },
      { week: 'Week 2', topic: 'Numpy & Pandas', details: 'Why use Numpy/Pandas? - Real-world datasets - Hands-on data operations' },
      { week: 'Week 3', topic: 'Data Preprocessing', details: 'Data cleaning - Feature extraction - Train-test split' },
      { week: 'Week 4', topic: 'NLP Basics', details: 'NLP concepts (tokens, stopwords) - Text to vectors - NLP pipeline' },
      { week: 'Week 5', topic: 'Bag of Words & TF-IDF', details: 'BOW, TF-IDF vectorization - Application in text classification' },
      { week: 'Week 6', topic: 'ML Algorithms', details: 'Classification & Regression - Linear/Logistic Regression, Decision Trees' },
      { week: 'Week 7', topic: 'NLP Projects & Model Training', details: 'Sentiment analysis - Dataset-based project kickoff' },
      { week: 'Week 8', topic: 'LLMs & Transformers Intro', details: 'LLM architecture - How LLMs work - Use cases (chatbots, Q&A)' },
      { week: 'Week 9', topic: 'LLM Applications', details: 'Prompt engineering - Using APIs (OpenAI/HuggingFace) - Mini LLM project' },
      { week: 'Week 10', topic: 'NLP + LLM Project Implementation', details: 'Complete text classification / chatbot project - Intermediate results' },
      { week: 'Week 11', topic: 'Project Refinement & Testing', details: 'Model evaluation - Result analysis - Report preparation' },
      { week: 'Week 12', topic: 'Major Project Presentation & Wrap-Up', details: 'Final presentation - Peer & mentor feedback - Certification, Summary' },
    ],
  },
  {
    year: 'Web Development Track',
    weeks: [
      { week: 'Week 1–2', topic: 'HTML, CSS, JavaScript & DOM Manipulation', details: 'HTML,CSS revision & ES6+, Async, Fetch API, DOM Operations' },
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
    <div className="pt-24 pb-16 px-4 bg-black text-white min-h-screen font-sans"> {/* Added font-sans */}
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
              <div className="overflow-x-auto"> {/* Reverted: Removed rounded-lg shadow-lg */}
                <table className="min-w-full table-auto border border-gray-700 text-sm md:text-base"> {/* Reverted: Removed rounded-lg overflow-hidden */}
                  <thead style={{ backgroundColor: '#222' }}>
                    <tr>
                      <th className="text-left px-4 py-3 border-b border-gray-700 text-[#54ae90]">Week</th> {/* Reverted: Removed font-medium */}
                      <th className="text-left px-4 py-3 border-b border-gray-700 text-[#54ae90]">Topic</th> {/* Reverted: Removed font-medium */}
                      <th className="text-left px-4 py-3 border-b border-gray-700 text-[#54ae90]">Details</th> {/* Reverted: Removed font-medium */}
                    </tr>
                  </thead>
                  <tbody>
                    {section.weeks.map((week, i) => (
                      <tr key={i} className="hover:bg-gray-800 transition"> {/* Reverted: Removed duration-300 ease-in-out */}
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
