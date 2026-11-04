import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const Timeline = () => {
  const milestones = [
    { year: '2015', title: 'The Beginning', description: 'Founded VXR Media with a vision to revolutionize the media landscape.' },
    { year: '2017', title: 'First Major Event', description: 'Successfully executed our first large-scale experiential marketing event.' },
    { year: '2019', title: 'Expansion', description: 'Launched VXR Experiences to focus on events and brand activations.' },
    { year: '2020', title: 'Digital Pivot', description: 'Launched KhabarBhejo as a digital news platform during the pandemic.' },
    { year: '2022', title: 'Real Estate Entry', description: 'Entered the real estate market with VXR Properties.' },
    { year: '2024', title: 'Continued Growth', description: 'Expanded operations across multiple verticals with a growing team.' },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="JOURNEY"
          title="Our Timeline"
          description="Key milestones that shaped our path to success."
          align="center"
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/20 hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-black hidden lg:block" />

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-black-light border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-all">
                    <span className="text-gold font-mono text-sm tracking-widest mb-2 block">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-ivory mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-ivory/70 font-body">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/journey" className="text-gold font-heading font-semibold hover:underline">
            View Full Journey →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
