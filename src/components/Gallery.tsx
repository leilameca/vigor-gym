import { motion } from 'framer-motion'

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    alt: 'Gym interior with equipment',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    alt: 'Athlete performing barbell workout',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    alt: 'Personal training session',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    alt: 'Weight training',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    alt: 'Gym floor with machines',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=800&q=80',
    alt: 'Cardio workout',
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Inside <span className="text-[#E63946]">Vigor</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Take a look at our world-class facility and the athletes who train here every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl group ${photo.tall ? 'row-span-2' : ''}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B0B0C]/30 group-hover:bg-[#0B0B0C]/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
