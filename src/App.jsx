import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- 1. Tambah baris import ini

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-slate-950">
      
      <Navbar />

      {/* Hero Section */}
      <main id="about" className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          SecOps Status: Monitoring
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          Hi, I'm Nisa
        </h1>
        
        <p className="text-xl text-slate-400 font-mono max-w-xl">
          Junior Developer <span className="text-emerald-500">//</span> Network Security Analyst Enthusiast
        </p>
        
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed mt-2">
          Tertarik pada pengembangan aplikasi web modern yang aman, analisis lalu lintas jaringan, dan implementasi sistem pertahanan siber dasar.
        </p>

        <div className="flex gap-4 mt-4">
          <a href="#projects" className="py-2.5 px-5 bg-emerald-500 hover:bg-emerald-600 transition text-slate-950 font-bold rounded-lg shadow-lg shadow-emerald-500/10 text-sm">
            Inisialisasi Proyek
          </a>
          <a href="#contact" className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 transition text-slate-300 font-medium rounded-lg border border-slate-800 text-sm">
            Hubungi Saya
          </a>
        </div>
      </main>

      <Projects />

      <Contact /> {/* <-- 2. Pasang komponennya di sini */}

      <footer className="w-full text-center py-8 text-xs font-mono text-slate-600 border-t border-slate-900 mt-20">
        &copy; {new Date().getFullYear()} Nisa. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
