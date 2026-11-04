import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Card from '../ui/Card';

const About = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="ABOUT"
          title="The Visionary"
          description="Building iconic experiences and shaping the future of media, events, and real estate."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20">
              <img
                src="/brand/vatsal-nathwani.jpg"
                alt="Vatsal Nathwani"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-ivory/80 font-body text-lg leading-relaxed">
              Vatsal Nathwani is the Founder & CEO of VXR Media Pvt Ltd, a dynamic entrepreneur who has built multiple successful ventures across media, experiential marketing, news platforms, and real estate.
            </p>
            <p className="text-ivory/80 font-body text-lg leading-relaxed">
              With a vision to create iconic experiences and meaningful connections, Vatsal has established himself as a prominent figure in the industry, known for his innovative approach and commitment to excellence.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-4 my-8">
              <p className="text-2xl font-heading font-semibold text-gold italic">
                "Success is not just about building businesses, it's about creating lasting impact."
              </p>
            </blockquote>

            <Button variant="primary" href="/about">
              Read Full Story
            </Button>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { title: 'Innovation', desc: 'Pushing boundaries and redefining possibilities' },
            { title: 'Excellence', desc: 'Commitment to the highest standards of quality' },
            { title: 'Impact', desc: 'Creating meaningful change in everything we do' },
          ].map((value, index) => (
            <Card key={index} glass hover>
              <h3 className="text-xl font-heading font-bold text-gold mb-3">{value.title}</h3>
              <p className="text-ivory/70 font-body">{value.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
