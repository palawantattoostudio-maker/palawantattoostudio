import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founders from './components/Founders';
import Services from './components/Services';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Merchandise from './components/Merchandise';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [galleryArtistId, setGalleryArtistId] = useState<string | null>(null);

  const handleArtistSelect = useCallback((artistId: string) => {
    setGalleryArtistId(artistId);
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClearArtist = useCallback(() => {
    setGalleryArtistId(null);
  }, []);

  const handleViewProfile = useCallback((artistId: string) => {
    document.querySelector('#artists')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founders onArtistSelect={handleArtistSelect} onViewProfile={handleViewProfile} />
        <Services />
        <Artists onArtistSelect={handleArtistSelect} />
        <Gallery initialArtistId={galleryArtistId} onClearArtist={handleClearArtist} />
        <Achievements />
        <Merchandise />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
