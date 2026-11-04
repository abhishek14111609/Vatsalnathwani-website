import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import ventures from '../../data/ventures';

const Ventures = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="VENTURES"
          title="Our Portfolio"
          description="Explore the diverse range of businesses under the VXR umbrella."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/ventures/${venture.slug}`}>
                <Card hover glass className="h-full group">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-heading font-bold text-black"
                      style={{ backgroundColor: venture.color }}
                    >
                      {venture.logo}
                    </div>
                    <Tag variant="outline">{venture.tagline}</Tag>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-ivory mb-3 group-hover:text-gold transition-colors">
                    {venture.name}
                  </h3>
                  
                  <p className="text-ivory/70 font-body mb-6">
                    {venture.description}
                  </p>
                  
                  <div className="flex items-center text-gold font-heading font-semibold">
                    <span>Learn More</span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/ventures">
            <Button variant="secondary" size="lg">
              View All Ventures
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
