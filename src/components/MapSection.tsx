import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const INFO: { icon: ReactNode; label: string; value: string }[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: '350 West 42nd Street\nNew York, NY 10036',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (809) 269-7630',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'info@vigorgym.com',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Mon – Fri: 5 am – 11 pm\nSat – Sun: 7 am – 9 pm',
  },
]

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
                <span className="text-[#E63946] mt-0.5 shrink-0">{item.icon}</span>
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
