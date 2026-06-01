import { motion } from 'framer-motion'

const INFO = [
  {
    icon: '📍',
    label: 'Address',
    value: '350 West 42nd Street\nNew York, NY 10036',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+1 (809) 269-7630',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@vigorgym.com',
  },
  {
    icon: '⏰',
    label: 'Hours',
    value: 'Mon – Fri: 5 am – 11 pm\nSat – Sun: 7 am – 9 pm',
  },
]

// OpenStreetMap embed — Midtown West, New York City (no API key required)
const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-74.0105%2C40.7483%2C-73.9905%2C40.7683&layer=mapnik&marker=40.7583%2C-74.0005'

const MAPS_LINK = 'https://www.google.com/maps?q=40.7583,-74.0005'

export default function MapSection() {
  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Location
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Find <span className="text-[#E63946]">Us</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Conveniently located in the heart of Midtown Manhattan, steps from the subway.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/5 h-[420px]"
          >
            <iframe
              src={MAP_SRC}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Vigor Gym Location — Midtown Manhattan, New York"
              className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500 w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-[#141414] border border-white/5 rounded-xl p-5"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E63946] text-white font-semibold rounded-xl hover:bg-[#c1121f] transition-colors duration-200"
            >
              Get Directions →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
