import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero-stage relative min-h-screen overflow-hidden bg-[#f6f6f2] pt-24 text-black">
    <div className="hero-grid absolute inset-0 opacity-70" />
    <div className="absolute -right-24 top-20 h-[33rem] w-[33rem] rounded-full bg-[#ffd62f] blur-[110px] opacity-30" />
    <div className="absolute left-[8%] top-[23%] h-3 w-3 rounded-full bg-[#ffd62f] motion-safe:animate-ping" />
    <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 items-end gap-6 px-6 pb-10 lg:grid-cols-12 lg:px-8">
      <motion.div className="relative z-20 pb-10 lg:col-span-7 lg:pb-20" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.16, 1, .3, 1] }}>
        <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em]"><span className="inline-block h-2 w-2 rounded-full bg-[#ffd62f]" />Founder / VXR Media Pvt. Ltd.</div>
        <h1 className="max-w-4xl text-[clamp(3.7rem,8.1vw,8.2rem)] font-black leading-[.78] tracking-[-.085em]">THINK<br /><span className="hero-outline">BEYOND.</span></h1>
        <p className="mt-9 max-w-md text-base leading-relaxed text-black/65 sm:text-lg">Building brands, experiences and ideas that turn ambition into unmistakable impact.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link to="/ventures" className="group inline-flex items-center gap-4 bg-black px-6 py-4 text-xs font-bold uppercase tracking-[.18em] text-white transition hover:bg-[#ffd62f] hover:text-black">Explore ventures <span className="text-lg transition group-hover:translate-x-1">↗</span></Link><Link to="/contact" className="inline-flex items-center gap-3 border border-black/30 px-6 py-4 text-xs font-bold uppercase tracking-[.18em] transition hover:border-black hover:bg-white">Start a conversation</Link></div>
      </motion.div>
      <motion.div className="relative flex min-h-[480px] items-end justify-center lg:col-span-5 lg:min-h-[calc(100vh-6rem)]" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .18 }}>
        <div className="absolute bottom-9 right-0 z-0 h-[80%] w-[92%] bg-[#ffd62f]" /><div className="absolute bottom-[35%] -right-6 z-20 hidden rotate-90 bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[.28em] text-white lg:block">The visionary&apos;s stage</div>
        <img src="/brand/vatsal-nathwani.jpg" alt="Vatsal Nathwani, Founder of VXR Media" className="relative z-10 h-[500px] w-full max-w-[455px] object-cover object-[42%_center] grayscale transition duration-700 hover:grayscale-0 lg:h-[calc(100vh-8rem)]" />
        <div className="absolute bottom-8 left-0 z-20 bg-white px-5 py-4 shadow-xl"><div className="text-[10px] font-bold uppercase tracking-[.2em] text-black/50">Vatsal Nathwani</div><div className="mt-1 text-sm font-black tracking-tight">Founder &amp; CEO</div></div>
      </motion.div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-black/10 px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-black/55 lg:px-8"><span>Scroll to discover</span><span>01 / 05</span></div>
  </section>
);
export default Hero;
