import { motion } from 'framer-motion'

const CLASSES = [
  { name: 'CrossFit', level: 'All Levels', duration: '60 min', schedule: 'Mon, Wed, Fri' },
  { name: 'Boxing', level: 'Beginner / Intermediate', duration: '45 min', schedule: 'Tue, Thu' },
  { name: 'Power Yoga', level: 'All Levels', duration: '60 min', schedule: 'Mon, Wed, Sat' },
  { name: 'Cycling', level: 'All Levels', duration: '45 min', schedule: 'Daily' },
  { name: 'HIIT', level: 'Intermediate', duration: '30 min', schedule: 'Mon – Sat' },
  {
    name: 'Strength & Conditioning',
    level: 'Intermediate / Advanced',
    duration: '75 min',
    schedule: 'Tue, Thu, Sat',
  },
]

export default function Classes() {
  return (
    <section id="classes" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Find Your <span className="text-[#E63946]">Class</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            From high‑intensity training to mindful movement — we have a class for every fitness
            level and goal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLASSES.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-6 hover:border-[#E63946]/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold">{cls.name}</h3>
                <span className="text-xs text-[#E63946] bg-[#E63946]/10 px-2.5 py-1 rounded-full shrink-0">
                  {cls.duration}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">{cls.level}</p>
              <div className="flex items-center gap-2 text-gray-600 text-xs">
                <span>📅</span>
                <span>{cls.schedule}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-[#E63946] font-semibold text-sm hover:underline underline-offset-4"
          >
            View full schedule →
          </a>
        </div>
      </div>
    </section>
  )
}
