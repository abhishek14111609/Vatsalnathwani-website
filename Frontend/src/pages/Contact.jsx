import { useState } from 'react';
import toast from 'react-hot-toast';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  interest: '',
  budget: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: POST to `/api/v1/enquiries` once the backend endpoint is live.
      await new Promise((resolve) => setTimeout(resolve, 600));
      toast.success("Thanks for reaching out! We'll get back to you shortly.");
      setFormData(emptyForm);
    } catch {
      toast.error('Something went wrong. Please try again or email hello@vxrmedia.in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SectionHeading
          subtitle="CONTACT"
          title="Let's Connect"
          description="Have a project in mind? Let's discuss how we can work together."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <Card glass>
              <h3 className="text-2xl font-heading font-bold text-ivory mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gold font-heading font-semibold mb-2">Email</h4>
                  <p className="text-ivory/70 font-body">hello@vxrmedia.in</p>
                </div>
                <div>
                  <h4 className="text-gold font-heading font-semibold mb-2">Phone</h4>
                  <p className="text-ivory/70 font-body">+91 98765 43210</p>
                </div>
                <div>
                  <h4 className="text-gold font-heading font-semibold mb-2">Address</h4>
                  <p className="text-ivory/70 font-body">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gold/20">
                <h4 className="text-gold font-heading font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                    >
                      <span className="text-xs font-heading font-bold">{social.slice(0, 2).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
            <Card glass>
              <h3 className="text-xl font-heading font-bold text-ivory mb-4">Working Hours</h3>
              <div className="space-y-2 text-ivory/70 font-body">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>
          </div>

          <Card glass>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ivory/80 font-body mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-ivory/80 font-body mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ivory/80 font-body mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-ivory/80 font-body mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ivory/80 font-body mb-2">Interest *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select interest</option>
                    <option value="brand-collaboration">Brand Collaboration</option>
                    <option value="event">Event</option>
                    <option value="media">Media</option>
                    <option value="property">Property</option>
                    <option value="speaking">Speaking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-ivory/80 font-body mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="5l-10l">₹5L - ₹10L</option>
                    <option value="10l-25l">₹10L - ₹25L</option>
                    <option value="25l-50l">₹25L - ₹50L</option>
                    <option value="50l+">₹50L+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-ivory/80 font-body mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black-light border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
