import SectionHeading from '../components/ui/SectionHeading';

const content = {
  privacy: {
    subtitle: 'LEGAL',
    title: 'Privacy Policy',
    description:
      'How VXR Media Pvt Ltd collects, uses and protects the information you share with us.',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'When you use our contact form we collect the details you choose to provide — such as your name, email address, phone number, company, area of interest, budget range and message. We also collect basic technical information such as your browser type and the pages you visit.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'We use the information you provide to respond to your enquiry, discuss potential collaborations and improve our website. We do not sell your personal information to third parties.',
      },
      {
        heading: 'Cookies & Analytics',
        body: 'We may use cookies and privacy-friendly analytics to understand how the site is used. You can disable cookies in your browser settings at any time without losing access to the site.',
      },
      {
        heading: 'Data Retention',
        body: 'Enquiry details are kept only for as long as needed to handle your request and maintain our business records. You may ask us to delete your data at any time.',
      },
      {
        heading: 'Your Rights',
        body: 'You can request access to, correction of, or deletion of the personal information we hold about you by writing to hello@vxrmedia.in.',
      },
      {
        heading: 'Contact',
        body: 'For any questions about this policy, please email hello@vxrmedia.in.',
      },
    ],
  },
  terms: {
    subtitle: 'LEGAL',
    title: 'Terms of Service',
    description:
      'The terms that govern your use of the VXR Media Pvt Ltd website.',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: 'By accessing and using this website you agree to these terms. If you do not agree with any part of them, please discontinue use of the site.',
      },
      {
        heading: 'Use of the Website',
        body: 'You agree to use this website lawfully and not to attempt to disrupt, damage or gain unauthorised access to it or to any connected systems.',
      },
      {
        heading: 'Intellectual Property',
        body: 'All content on this website — including text, logos, brand marks, graphics and layout — belongs to VXR Media Pvt Ltd or its licensors and may not be reproduced without prior written permission.',
      },
      {
        heading: 'Enquiries & Proposals',
        body: 'Information on this site is provided for general reference. Submitting an enquiry does not create a binding agreement; any engagement is governed by a separate written contract.',
      },
      {
        heading: 'Third-Party Links',
        body: 'This site may link to external websites. We are not responsible for the content, policies or practices of those sites.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'We aim to keep the information on this site accurate and current, but we make no warranties as to its completeness. We are not liable for any loss arising from reliance on it.',
      },
      {
        heading: 'Contact',
        body: 'For questions about these terms, please email hello@vxrmedia.in.',
      },
    ],
  },
};

const Legal = ({ type = 'privacy' }) => {
  const { subtitle, title, description, sections } = content[type] ?? content.privacy;

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <SectionHeading
          subtitle={subtitle}
          title={title}
          description={description}
          align="center"
        />

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-heading font-bold text-ivory mb-3">
                {section.heading}
              </h2>
              <p className="text-ivory/70 font-body leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;
