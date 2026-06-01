import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Classes from './components/Classes'
import Gallery from './components/Gallery'
import VideoSection from './components/VideoSection'
import Membership from './components/Membership'
import MapSection from './components/MapSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0B0B0C] text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Gallery />
        <VideoSection />
        <Membership />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
