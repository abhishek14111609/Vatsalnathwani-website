/**
 * Venture content used by both the Ventures listing and the detail pages.
 * Copy is placeholder-level until the real data is supplied from the CMS.
 */
const ventures = [
  {
    name: 'VXR Media',
    slug: 'vxr-media',
    tagline: 'Parent Media Company',
    description:
      'The flagship media company driving innovation across multiple platforms.',
    longDescription:
      'VXR Media is the flagship company of the group, driving innovation across content, brand strategy and media production. It is the engine behind every other vertical — setting the standard for craft, storytelling and execution across the portfolio.',
    logo: 'VXR',
    color: '#F5C26B',
    services: ['Content Creation', 'Digital Marketing', 'Brand Strategy', 'Media Production'],
  },
  {
    name: 'VXR Experiences',
    slug: 'vxr-experiences',
    tagline: 'Events & Experiential Marketing',
    description:
      'Creating unforgettable events and brand experiences that leave lasting impressions.',
    longDescription:
      'VXR Experiences designs and produces live brand moments — from intimate gatherings to large-scale productions. Every activation is built around a single idea: give people something they will remember and want to talk about.',
    logo: 'VXR',
    color: '#D4883A',
    services: ['Event Management', 'Brand Activations', 'Experiential Marketing', 'Production'],
  },
  {
    name: 'KhabarBhejo',
    slug: 'khabarbhejo',
    tagline: 'News & Media Platform',
    description: 'Your trusted source for news, updates, and stories that matter.',
    longDescription:
      'KhabarBhejo is a digital-first news platform built for speed and reach. It delivers timely, accurate reporting and stories that connect with audiences across web and social channels.',
    logo: 'KB',
    color: '#F5C26B',
    services: ['News Coverage', 'Digital Publishing', 'Media Distribution', 'Content Curation'],
  },
  {
    name: 'VXR Properties',
    slug: 'vxr-properties',
    tagline: 'Real Estate',
    description: 'Premium real estate solutions for modern living and investment.',
    longDescription:
      'VXR Properties brings the same standard of care to real estate — curated properties, considered advisory and a focus on long-term value for both living and investment.',
    logo: 'VXR',
    color: '#D4883A',
    services: ['Property Sales', 'Real Estate Consulting', 'Investment Advisory', 'Property Management'],
  },
];

export const getVentureBySlug = (slug) =>
  ventures.find((venture) => venture.slug === slug);

export default ventures;
