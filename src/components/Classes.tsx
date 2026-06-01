import { motion } from 'framer-motion'

const CLASSES = [
  {
    name: 'CrossFit',
    level: 'All Levels',
    duration: '60 min',
    schedule: 'Mon, Wed, Fri',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Boxing',
    level: 'Beginner / Intermediate',
    duration: '45 min',
    schedule: 'Tue, Thu',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Power Yoga',
    level: 'All Levels',
    duration: '60 min',
    schedule: 'Mon, Wed, Sat',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cycling',
    level: 'All Levels',
    duration: '45 min',
    schedule: 'Daily',
    image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'HIIT',
    level: 'Intermediate',
    duration: '30 min',
    schedule: 'Mon – Sat',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Strength & Conditioning',
    level: 'Intermediate / Advanced',
    duration: '75 min',
    schedule: 'Tue, Thu, Sat',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
  },
]

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  )
}

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
            From high-intensity training to mindful movement — we have a class for every fitness
            level and goal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLASSES.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:border-[#E63946]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-xs text-white bg-[#E63946] px-2.5 py-1 rounded-full font-semibold">
                  {cls.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{cls.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{cls.level}</p>
                <div className="flex items-center gap-2 text-gray-600 text-xs">
                  <CalendarIcon />
                  <span>{cls.schedule}</span>
                </div>
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
