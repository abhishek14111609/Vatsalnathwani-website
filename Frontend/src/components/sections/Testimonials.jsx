import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      designation: 'CEO, TechCorp',
      company: 'TechCorp India',
      quote: 'Working with VXR Media was an exceptional experience. Their attention to detail and creative vision exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      designation: 'Event Director',
      company: 'Global Events Ltd',
      quote: 'VXR Experiences transformed our brand event into something truly memorable. The team professionalism and creativity are unmatched.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      designation: 'Marketing Head',
      company: 'Brand Solutions',
      quote: 'The strategic insights and execution quality from VXR Media helped us achieve our marketing goals ahead of schedule.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-black-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="TESTIMONIALS"
          title="What People Say"
          description="Hear from our clients and partners about their experience working with us."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover glass>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-ivory/80 font-body text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div>
                  <h4 className="text-ivory font-heading font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-ivory/60 font-body text-sm">
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
