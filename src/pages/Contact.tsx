import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const App = () => {
  const primaryColor = '#54ae90';
  const secondaryColor = '#aedce2';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `23sc121481133@sanjayghodawatuniversity.ac.in?subject=${encodeURIComponent(`Inquiry from :${name} for message :${message}`)}&body=${encodeURIComponent(`Hello Code Cracker Club,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6" style={{ color: primaryColor }}>Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: secondaryColor }}>
              Have questions? We'd love to hear from you. Send us a message and we'll
              respond as soon as possible.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: 'rgba(174, 220, 226, 0.1)' }}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: secondaryColor }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900 border rounded-lg px-4 py-2 focus:outline-none"
                    style={{ borderColor: secondaryColor, }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: secondaryColor }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900 border rounded-lg px-4 py-2 focus:outline-none"
                    style={{ borderColor: secondaryColor, }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: secondaryColor }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-gray-900 border rounded-lg px-4 py-2 focus:outline-none"
                    style={{ borderColor: secondaryColor, }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-md"
                  style={{ backgroundColor: primaryColor, }}
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div
                className="p-6 rounded-lg shadow-lg"
                style={{ backgroundColor: 'rgba(174, 220, 226, 0.1)' }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-6 w-6" style={{ color: primaryColor }} />
                  <span>23sc121481133@sanjayghodawatuniversity.ac.in</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-6 w-6" style={{ color: primaryColor }} />
                  <span>+91 8169099263</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-6 w-6" style={{ color: primaryColor }} />
                  <span>+91 9405623203</span>
                </div>
                {/* <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-6 w-6" style={{ color: primaryColor }} />
                  <span>123 Tech Street, Innovation City, ST 12345</span>
                </div> */}
               
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
