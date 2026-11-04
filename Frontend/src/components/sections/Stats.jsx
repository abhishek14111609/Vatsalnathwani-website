import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Counter from '../ui/Counter';

const Stats = () => {
  const stats = [
    { label: 'Years of Experience', value: 10, suffix: '+' },
    { label: 'Ventures Built', value: 4, suffix: '' },
    { label: 'Team Members', value: 50, suffix: '+' },
    { label: 'Events Executed', value: 200, suffix: '+' },
    { label: 'Audience Reach', value: 1, suffix: 'M+' },
    { label: 'Happy Clients', value: 100, suffix: '+' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-black-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="IMPACT"
          title="By The Numbers"
          description="Our journey measured in milestones and achievements."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2"
              />
              <p className="text-ivory/60 font-body text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
