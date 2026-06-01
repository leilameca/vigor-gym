import { motion } from 'framer-motion'

const STATS = [
  { value: '500+', label: 'Active Members' },
  { value: '30+', label: 'Weekly Classes' },
  { value: '15+', label: 'Expert Coaches' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0B0B0C]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/40" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Premium Fitness Experience
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          FORGE YOUR
          <br />
          <span className="text-[#E63946]">LIMITS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transform your body and elevate your mindset at Vigor Gym. State-of-the-art
          equipment, expert coaches, and a community that pushes you to be your best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#membership"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#E63946] text-white font-bold text-base rounded-xl hover:bg-[#c1121f] transition-all duration-200 hover:scale-105 active:scale-100"
          >
            Start Your Journey
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
          >
            Discover More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#E63946]">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#E63946] to-transparent" />
      </motion.div>
    </section>
  )
}
