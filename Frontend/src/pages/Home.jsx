import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Ventures from '../components/sections/Ventures';
import Stats from '../components/sections/Stats';
import Timeline from '../components/sections/Timeline';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Marquee from '../components/ui/Marquee';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Ventures Marquee */}
      <div className="py-8 bg-black-light border-y border-gold/10 overflow-hidden">
        <Marquee speed={30} pauseOnHover>
          <span className="text-2xl font-heading font-bold text-gold mx-8">VXR MEDIA</span>
          <span className="text-2xl font-heading font-bold text-ivory/50 mx-8">•</span>
          <span className="text-2xl font-heading font-bold text-gold mx-8">VXR EXPERIENCES</span>
          <span className="text-2xl font-heading font-bold text-ivory/50 mx-8">•</span>
          <span className="text-2xl font-heading font-bold text-gold mx-8">KHABARBHEJO</span>
          <span className="text-2xl font-heading font-bold text-ivory/50 mx-8">•</span>
          <span className="text-2xl font-heading font-bold text-gold mx-8">VXR PROPERTIES</span>
          <span className="text-2xl font-heading font-bold text-ivory/50 mx-8">•</span>
        </Marquee>
      </div>

      <About />
      <Ventures />
      <Stats />
      <Timeline />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
