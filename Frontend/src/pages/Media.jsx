import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import ImageFrame from '../components/ui/ImageFrame';

const Media = () => {
  const mediaItems = [
    {
      type: 'press',
      title: 'Featured in Forbes India',
      source: 'Forbes India',
      date: '2024',
      description: 'Vatsal Nathwani featured for his innovative approach to media and experiential marketing.',
      thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=elegant%20editorial%20desk%20with%20a%20business%20magazine%20and%20newspaper%2C%20warm%20golden%20light%2C%20dark%20moody%20background%2C%20premium%20press%20feature%20aesthetic%2C%20photorealistic&image_size=landscape_16_9',
    },
    {
      type: 'interview',
      title: 'Entrepreneur Spotlight',
      source: 'Business Today',
      date: '2024',
      description: 'In-depth interview about the journey of building VXR Media and future plans.',
      thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=television%20studio%20interview%20setup%20with%20warm%20golden%20accent%20lighting%2C%20dark%20cinematic%20background%2C%20professional%20broadcast%20cameras%2C%20photorealistic&image_size=landscape_16_9',
    },
    {
      type: 'video',
      title: 'TEDx Talk: The Future of Media',
      source: 'TEDx',
      date: '2023',
      description: 'Sharing insights on the evolving landscape of media and technology.',
      thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=speaker%20on%20a%20dark%20stage%20lit%20by%20a%20warm%20golden%20spotlight%2C%20minimal%20cinematic%20conference%20stage%2C%20audience%20silhouettes%2C%20photorealistic&image_size=landscape_16_9',
    },
    {
      type: 'event',
      title: 'Annual Media Summit 2023',
      source: 'VXR Events',
      date: '2023',
      description: 'Keynote speaker at the annual media summit discussing industry trends.',
      thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=large%20premium%20corporate%20event%20venue%20with%20warm%20golden%20stage%20lighting%2C%20elegant%20dark%20ambience%2C%20crowd%20silhouettes%2C%20photorealistic&image_size=landscape_16_9',
    },
  ];

  const getTypeColor = (type) => {
    const colors = {
      press: '#F5C26B',
      interview: '#D4883A',
      video: '#F5C26B',
      event: '#D4883A',
    };
    return colors[type] || '#F5C26B';
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SectionHeading
          subtitle="MEDIA & PRESS"
          title="In The Spotlight"
          description="News, interviews, videos, and features about our journey and achievements."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {mediaItems.map((item, index) => (
            <Card key={index} hover glass>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-black-light">
                <ImageFrame
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Tag variant="solid" style={{ backgroundColor: getTypeColor(item.type) }}>
                  {item.type.toUpperCase()}
                </Tag>
                <span className="text-ivory/50 font-mono text-sm">{item.date}</span>
              </div>

              <h3 className="text-xl font-heading font-bold text-ivory mb-2">
                {item.title}
              </h3>

              <p className="text-ivory/60 font-body mb-4">
                {item.description}
              </p>

              <div className="text-gold font-heading font-semibold text-sm">
                {item.source}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
