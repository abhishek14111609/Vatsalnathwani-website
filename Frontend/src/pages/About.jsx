import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ImageFrame from '../components/ui/ImageFrame';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SectionHeading
          subtitle="ABOUT"
          title="The Visionary"
          description="Building iconic experiences and shaping the future of media, events, and real estate."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20">
            <ImageFrame
              src="/brand/vatsal-nathwani.jpg"
              alt="Portrait of Vatsal Nathwani"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="space-y-6">
            <p className="text-ivory/80 font-body text-lg leading-relaxed">
              Vatsal Nathwani is the Founder & CEO of VXR Media Pvt Ltd, a dynamic entrepreneur who has built multiple successful ventures across media, experiential marketing, news platforms, and real estate.
            </p>
            <p className="text-ivory/80 font-body text-lg leading-relaxed">
              With a vision to create iconic experiences and meaningful connections, Vatsal has established himself as a prominent figure in the industry, known for his innovative approach and commitment to excellence.
            </p>
            <p className="text-ivory/80 font-body text-lg leading-relaxed">
              His journey began with a simple idea: to transform how people experience media and events. Today, that vision has evolved into a portfolio of successful ventures that continue to push boundaries and set new standards.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-4 my-8">
              <p className="text-2xl font-heading font-semibold text-gold italic">
                "Success is not just about building businesses, it's about creating lasting impact."
              </p>
            </blockquote>
          </div>
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

        {/* Story Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-heading font-bold text-ivory mb-8">The Story</h2>
          <div className="space-y-6 text-ivory/80 font-body text-lg leading-relaxed">
            <p>
              Born with an entrepreneurial spirit, Vatsal Nathwani always knew he wanted to create something meaningful. His journey started with small projects that quickly grew into something much bigger.
            </p>
            <p>
              The founding of VXR Media marked the beginning of a new era. What started as a media company soon expanded into multiple verticals, each venture building on the success of the last.
            </p>
            <p>
              Today, VXR Media Pvt Ltd stands as a testament to vision, perseverance, and the power of believing in your dreams. With a team of talented individuals and a portfolio of successful ventures, the future looks brighter than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
