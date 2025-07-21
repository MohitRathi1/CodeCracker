import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: '',
      date: '',
      time: '',
      location: '',
      capacity: 30,
      image: '',
    },
  ];

  const pastEvents = [
    {
      title: 'Cybersecurity Workshop',
      date: '2024-03-15',
      highlights: 'Live hacking demonstration and security best practices',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800',
    },
    {
      title: 'Mobile App Development',
      date: '2024-03-01',
      highlights: 'Cross-platform development with React Native',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800',
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#54ae90' }}>
            Upcoming Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#aedce2' }}>
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" style={{ color: '#aedce2' }} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" style={{ color: '#aedce2' }} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" style={{ color: '#aedce2' }} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2" style={{ color: '#aedce2' }} />
                      <span>Capacity: {event.capacity}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-[#54ae90] text-white py-2 rounded-lg hover:bg-[#469b7f] transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#54ae90' }}>
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#aedce2' }}>
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-3">
                    <Calendar className="h-5 w-5 mr-2" style={{ color: '#aedce2' }} />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-400">{event.highlights}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
