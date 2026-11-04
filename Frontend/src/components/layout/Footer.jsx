import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'LinkedIn', icon: 'LI', url: '#' },
    { name: 'Twitter', icon: 'X', url: '#' },
    { name: 'YouTube', icon: 'YT', url: '#' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Journey', path: '/journey' },
    { name: 'Media', path: '/media' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-black border-t border-gold/20 overflow-hidden">
      {/* Giant outlined text */}
      <div className="relative py-20 lg:py-32">
        <motion.div
          className="text-hero font-heading font-bold text-transparent stroke-text text-center select-none"
          style={{
            WebkitTextStroke: '1px rgba(245, 194, 107, 0.3)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          LET'S BUILD
        </motion.div>
        <motion.div
          className="text-hero font-heading font-bold text-transparent stroke-text text-center select-none"
          style={{
            WebkitTextStroke: '1px rgba(245, 194, 107, 0.3)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        >
          SOMETHING ICONIC
        </motion.div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-heading font-bold text-gold">VXR</span>
              <span className="text-base font-body text-ivory/70">MEDIA</span>
            </div>
            <p className="text-ivory/60 font-body text-sm leading-relaxed">
              Building iconic experiences and shaping the future of media, events, and real estate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-ivory mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory/60 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-ivory mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-ivory/60 text-sm font-body">
                hello@vxrmedia.in
              </li>
              <li className="text-ivory/60 text-sm font-body">
                +91 98765 43210
              </li>
              <li className="text-ivory/60 text-sm font-body">
                Mumbai, India
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-semibold text-ivory mb-4">Follow</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-heading font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-ivory/40 text-sm font-body">
            © {currentYear} VXR Media Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-ivory/40 hover:text-gold text-sm font-body transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-ivory/40 hover:text-gold text-sm font-body transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
