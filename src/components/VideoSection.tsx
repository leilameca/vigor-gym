import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            In Action
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            See What We're <span className="text-[#E63946]">About</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Real people, real results. Watch how our members push their limits every single day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/60"
        >
          <iframe
            src="https://www.youtube.com/embed/mlVrkiCoKkg?rel=0&modestbranding=1&color=white"
            title="Vigor Gym — Training Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid grid-cols-3 gap-4"
        >
          {[
            { value: '10+', label: 'Years of excellence' },
            { value: '98%', label: 'Member satisfaction' },
            { value: '5★', label: 'Average rating' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-[#141414] border border-white/5 rounded-xl py-5 px-3"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#E63946]">{item.value}</div>
              <div className="text-xs text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
