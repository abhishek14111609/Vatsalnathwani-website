import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Button from '../components/ui/Button';
import ventures, { getVentureBySlug } from '../data/ventures';

const VentureDetail = () => {
  const { slug } = useParams();
  const venture = getVentureBySlug(slug);

  if (!venture) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-heading font-bold text-gold">Venture not found</h1>
          <p className="text-ivory/60 font-body">
            We couldn&apos;t find a venture at this address.
          </p>
          <Button variant="primary" href="/ventures">
            View All Ventures
          </Button>
        </div>
      </div>
    );
  }

  const relatedVentures = ventures.filter((item) => item.slug !== venture.slug);

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-heading font-bold text-black mb-6"
            style={{ backgroundColor: venture.color }}
          >
            {venture.logo}
          </div>

          <Tag variant="outline" className="mb-6">
            {venture.tagline}
          </Tag>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-ivory mb-6">
            {venture.name}
          </h1>

          <p className="text-ivory/70 font-body text-lg max-w-3xl leading-relaxed">
            {venture.longDescription}
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-24">
          <SectionHeading
            subtitle="WHAT WE DO"
            title="Services & Capabilities"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {venture.services.map((service, index) => (
              <Card key={service} glass hover>
                <span className="text-gold font-mono text-sm block mb-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-heading font-bold text-ivory">
                  {service}
                </h3>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ivory mb-6">
            Want to work with {venture.name}?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" href="/contact">
              Get In Touch
            </Button>
            <Button variant="secondary" size="lg" href="/ventures">
              All Ventures
            </Button>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <SectionHeading subtitle="EXPLORE" title="More Ventures" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {relatedVentures.map((item) => (
              <Link key={item.slug} to={`/ventures/${item.slug}`}>
                <Card hover glass className="h-full group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-heading font-bold text-black mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.logo}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ivory group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-ivory/60 font-body text-sm mt-2">
                    {item.tagline}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureDetail;
