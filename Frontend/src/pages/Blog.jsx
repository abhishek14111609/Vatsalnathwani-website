import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import ImageFrame from '../components/ui/ImageFrame';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Experiential Marketing',
      excerpt: 'Exploring how brands are creating immersive experiences that resonate with audiences.',
      category: 'Marketing',
      date: '2024-10-15',
      readTime: '5 min read',
      coverImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=immersive%20brand%20experience%20installation%20with%20warm%20golden%20lights%20in%20a%20dark%20modern%20space%2C%20people%20engaging%20with%20interactive%20exhibits%2C%20cinematic%2C%20photorealistic&image_size=landscape_16_9',
    },
    {
      title: 'Building a Media Empire from Scratch',
      excerpt: 'Lessons learned from the journey of building VXR Media and its subsidiaries.',
      category: 'Entrepreneurship',
      date: '2024-09-28',
      readTime: '8 min read',
      coverImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20media%20company%20office%20at%20dusk%2C%20dark%20interior%20with%20warm%20golden%20desk%20lamps%2C%20ambitious%20entrepreneurial%20atmosphere%2C%20cinematic%2C%20photorealistic&image_size=landscape_16_9',
    },
    {
      title: 'The Power of Brand Storytelling',
      excerpt: 'How compelling narratives can transform your brand and connect with audiences.',
      category: 'Branding',
      date: '2024-09-15',
      readTime: '6 min read',
      coverImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=creative%20brand%20storytelling%20moodboard%20on%20dark%20textured%20paper%20with%20warm%20golden%20typography%20accents%2C%20cinematic%20flat%20lay%2C%20photorealistic&image_size=landscape_16_9',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SectionHeading
          subtitle="BLOG"
          title="Insights & Stories"
          description="Thoughts, experiences, and insights from the world of media and entrepreneurship."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post, index) => (
            <Card key={index} hover glass className="h-full">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-black-light">
                <ImageFrame
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Tag variant="outline">{post.category}</Tag>
                <span className="text-ivory/50 font-mono text-xs">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-heading font-bold text-ivory mb-3 hover:text-gold transition-colors">
                {post.title}
              </h3>

              <p className="text-ivory/70 font-body mb-4">
                {post.excerpt}
              </p>

              <div className="text-ivory/50 font-mono text-sm">
                {post.date}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
