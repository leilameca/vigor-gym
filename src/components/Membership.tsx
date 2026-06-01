import { motion } from 'framer-motion'

const PLANS = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for getting started',
    features: [
      'Gym floor access',
      'Locker room & showers',
      '2 group classes / week',
      'Basic fitness assessment',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 49,
    description: 'Our most popular plan',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal sessions / month',
      'Nutrition consultation',
      'App & progress tracking',
    ],
    cta: 'Start Pro',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: 79,
    description: 'For serious athletes',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Priority class booking',
      'Monthly body composition scan',
      'Exclusive members lounge',
      'Guest passes (2 / month)',
    ],
    cta: 'Go Elite',
    highlighted: false,
  },
]

export default function Membership() {
  return (
    <section id="membership" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E63946] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Choose Your <span className="text-[#E63946]">Plan</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Flexible membership options to fit your lifestyle and budget. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-[#E63946] border border-[#E63946]'
                  : 'bg-[#141414] border border-white/5'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#E63946] text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-red-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-red-100' : 'text-gray-500'}`}>
                  / month
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 text-sm font-bold ${
                        plan.highlighted ? 'text-red-100' : 'text-[#E63946]'
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-red-50' : 'text-gray-400'}`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-[#E63946] hover:bg-gray-100'
                    : 'bg-[#E63946] text-white hover:bg-[#c1121f]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
