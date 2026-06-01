import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: '🏋️',
    title: 'Premium Equipment',
    description:
      'Access over 200 pieces of top-tier machines and free weights from the industry\'s leading brands.',
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Coaches',
    description:
      'Train with certified personal trainers who design programs tailored to your individual goals.',
  },
  {
    icon: '🥊',
    title: 'Diverse Classes',
    description:
      'More than 30 weekly classes — CrossFit, boxing, yoga, cycling, HIIT, and more.',
  },
  {
    icon: '🥗',
    title: 'Nutrition Guidance',
    description:
      'In‑house nutritionists help you fuel your workouts and build sustainable eating habits.',
  },
  {
    icon: '🕐',
    title: '24 / 7 Access',
    description:
      'Train on your own schedule. Our facility is open around the clock every day of the year.',
  },
  {
    icon: '🤝',
    title: 'Strong Community',
    description:
      'Join hundreds of motivated athletes who hold each other accountable and celebrate wins together.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Everything You Need to
            <br />
            <span className="text-[#E63946]">Succeed</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            We provide a complete fitness ecosystem designed to help you reach peak performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#141414] border border-white/5 rounded-2xl p-6 hover:border-[#E63946]/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
