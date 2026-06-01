const LINKS: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: 'About Us', href: '#features' },
    { label: 'Our Classes', href: '#classes' },
    { label: 'Membership', href: '#membership' },
    { label: 'Location', href: '#location' },
  ],
  Support: [
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#home" className="text-2xl font-black tracking-tight">
              <span className="text-[#E63946]">VIGOR</span>
              <span className="text-white"> GYM</span>
            </a>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed max-w-xs">
              Your premier fitness destination. Transform your body, elevate your mindset, and build
              lasting habits.
            </p>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">© {year} Vigor Gym. All rights reserved.</p>
          <a
            href="https://leilameca.github.io/Moran-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-700 hover:text-white transition-colors"
          >
            Developed by <span className="text-[#E63946] font-semibold">Moran Studio</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
