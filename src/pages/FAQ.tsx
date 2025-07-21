import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const primaryColor = '#54ae90'; 
  const secondaryColor = '#aedce2'; 

  const faqs = [
    {
      question: 'How can I become a member?',
      answer: 'To become a member, simply fill out the registration form on our Membership page. Once submitted, we\'ll review your application and get back to you within 2-3 business days.',
    },
    {
      question: 'What are the membership benefits?',
      answer: 'Members get access to exclusive workshops, one-on-one mentoring sessions, networking opportunities, priority registration for events, and the chance to collaborate on real-world projects.',
    },
    {
      question: 'Are there any membership fees?',
      answer: 'Currently, membership is free for all students. We believe in making technology education accessible to everyone.',
    },
    {
      question: 'How often do you organize events?',
      answer: 'We organize events on a regular basis, typically 2-3 events per month. These include workshops, hackathons, tech talks, and social gatherings.',
    },
    {
      question: 'Can beginners join the club?',
      answer: 'Absolutely! We welcome members of all skill levels. Our community is built on learning and supporting each other, making it perfect for beginners.',
    },
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, we provide certificates of completion for our workshops and participation certificates for hackathons and other major events.',
    },
    {
      question: 'How can I contribute to the club?',
      answer: 'There are many ways to contribute! You can become a mentor, help organize events, give talks, or contribute to our open-source projects.',
    },
    {
      question: 'Is attendance mandatory?',
      answer: 'While we encourage active participation, attendance is not mandatory. You can participate in events that interest you and fit your schedule.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6" style={{ color: primaryColor }}>Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: secondaryColor }}>
            Find answers to common questions about Code Crackers Club
          </p>
        </motion.section>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundColor: 'rgba(174, 220, 226, 0.1)' }} 
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between transition-colors duration-300"
                style={{ backgroundColor: 'rgba(174, 220, 226, 0.1)', }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(174, 220, 226, 0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(174, 220, 226, 0.1)'}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-left text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" style={{ color: primaryColor }} /> /* Icon color to primary */
                ) : (
                  <ChevronDown className="h-5 w-5" style={{ color: primaryColor }} /> /* Icon color to primary */
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4" style={{ color: secondaryColor }}>
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
