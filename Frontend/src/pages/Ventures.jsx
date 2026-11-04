import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import { Link } from 'react-router-dom';
import ventures from '../data/ventures';

const Ventures = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SectionHeading
          subtitle="VENTURES"
          title="Our Portfolio"
          description="Explore the diverse range of businesses under the VXR umbrella."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {ventures.map((venture) => (
            <Link key={venture.slug} to={`/ventures/${venture.slug}`}>
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {venture.services.slice(0, 3).map((service, i) => (
                    <span key={i} className="text-xs font-mono text-gold/70">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gold font-heading font-semibold">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventures;
