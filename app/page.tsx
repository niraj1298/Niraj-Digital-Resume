'use client';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Skills from '@/components/Skills';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
    <div className="max-w-7xl w-full mx-auto px-4">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  </div>
  ); 
}