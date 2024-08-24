'use client';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
      </div>
    </div>
  );
}