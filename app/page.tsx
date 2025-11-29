// app/page.tsx (Final Integration)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SideImage from './components/SideImage';
import UploadSuggestion from './components/UploadSuggestion';
import About from './components/About';
import Footer from './components/Footer';
import Loader from './components/Loader';
import admin from './components/Loader';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans"> {/* Base background is light gray */}
      <Navbar />
      <main>
        <Hero />
        <SideImage />
        <UploadSuggestion />
        <About />
      </main>
      <Footer />
    </div>
  );
}