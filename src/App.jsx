import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
// 1. Import gambar background yang baru kamu simpan
import rainbowBg from './assets/rainbow-bg.png'; 

function App() {
  return (
    // 2. Kontainer Utama: Menghilangkan background slate, ganti dengan pastel pink dasar
    <div className="min-h-screen bg-pink-100 text-slate-800 relative overflow-hidden selection:bg-pink-300">
      
      {/* 3. Efek Background Bergerak (Parallax Looping) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 animate-backgroundScroll"
        style={{ 
          backgroundImage: `url(${rainbowBg})`,
          backgroundSize: '800px auto', // Ukuran gambar yang diulang
          backgroundRepeat: 'repeat',    // Gambar mengulang horizontal & vertikal
        }}
      ></div>

      {/* 4. Kontainer Konten (Biar di atas background bergerak) */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Update Navbar: Menyesuaikan warna pastel */}
        <nav className="w-full max-w-5xl mx-auto px-6 py-4 flex justify-between items-center border-b border-pink-200 backdrop-blur-sm bg-pink-100/50 sticky top-0 z-50">
          <div className="text-xl font-mono font-bold tracking-wider text-pink-500">
            NS@PRTFL ~$
          </div>
          <div className="flex gap-6 font-mono text-sm text-pink-700/80">
            <a href="#about" className="hover:text-pink-500 transition">_about</a>
            <a href="#projects" className="hover:text-pink-500 transition">_projects</a>
            <a href="#contact" className="hover:text-pink-500 transition">_contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <main id="about" className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          
          {/* Status Badge: Ubah warna */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/60 text-cyan-700 text-xs font-mono border border-cyan-200 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            SecOps Status: *So Cute!*
          </div>
          
          {/* Judul: Ubah Gradasi jadi Pink-Cyan-Lavender */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Hi, I'm Nisa
          </h1>
          
          {/* Deskripsi: Sesuaikan warna teks dan simbol */}
          <p className="text-xl text-slate-700 font-mono max-w-xl">
            Junior Developer <span className="text-pink-400">&lt;3</span> Network Security Analyst Enthusiast
          </p>
          
          <p className="text-slate-600 text-sm max-w-2xl leading-relaxed mt-2">
            Tertarik pada pengembangan aplikasi web modern yang aman, analisis lalu lintas jaringan, dan implementasi sistem pertahanan siber dasar.
          </p>

          {/* Tombol: Ubah warna */}
          <div className="flex gap-4 mt-4 z-10">
            <a href="#projects" className="py-2.5 px-5 bg-pink-400 hover:bg-pink-500 transition text-white font-bold rounded-full shadow-lg shadow-pink-300/30 text-sm">
              Inisialisasi Proyek
            </a>
            <a href="#contact" className="py-2.5 px-5 bg-white hover:bg-slate-50 transition text-slate-700 font-medium rounded-full border border-pink-200 text-sm">
              Hubungi Saya
            </a>
          </div>
        </main>

        <Projects />
        <Contact />

        <footer className="w-full text-center py-8 text-xs font-mono text-pink-600/80 border-t border-pink-200 mt-20 bg-pink-100/50">
          &copy; {new Date().getFullYear()} Nisa. All rights reserved. &lt;3
        </footer>
      </div>

    </div>
  );
}

export default App;