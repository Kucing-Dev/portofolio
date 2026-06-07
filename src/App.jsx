import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Pesan kamu berhasil dikirim! ✨');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 p-4 md:p-8 font-sans text-gray-700 selection:bg-purple-200">
      
      {/* HEADER / TITLE SECTION */}
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 drop-shadow-sm tracking-wide">
          NISA'S PORTFOLIO
        </h1>
        <p className="text-xs text-purple-400 mt-2 tracking-widest font-mono">✦ MOTION CREATIVE ✦</p>
      </header>

      {/* NAVIGATION BAR (TAB STYLE) */}
      <nav className="max-w-5xl mx-auto mb-8 grid grid-cols-3 md:grid-cols-5 gap-2 text-center font-bold text-white text-sm">
        <a href="#design" className="bg-emerald-300 py-3 rounded-full shadow-sm transform transition duration-300 hover:scale-105 hover:bg-emerald-400">DESIGN</a>
        <a href="#projects" className="bg-orange-300 py-3 rounded-full shadow-sm transform transition duration-300 hover:scale-105 hover:bg-orange-400">PROJECTS</a>
        <a href="#about" className="bg-amber-300 py-3 rounded-full shadow-sm transform transition duration-300 hover:scale-105 hover:bg-amber-400">ABOUT</a>
        <a href="#contact" className="bg-sky-300 py-3 rounded-full shadow-sm transform transition duration-300 hover:scale-105 hover:bg-sky-400">CONTACT</a>
        <a href="#skills" className="bg-purple-300 py-3 rounded-full shadow-sm transform transition duration-300 hover:scale-105 hover:bg-purple-400 col-span-3 md:col-span-1">SKILLS</a>
      </nav>

      {/* MAIN DASHBOARD GRID */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: DESIGN GALLERY (KOLOM GAMBAR) */}
        <section id="design" className="lg:col-span-4 bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/40 transition duration-300 hover:shadow-md">
          <h2 className="text-2xl font-bold text-center text-emerald-400 mb-4 tracking-wide">DESIGN</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              'gambar1.jpeg',
              'gambar2.jpeg',
              'gambar3.jpeg',
              'gambar4.jpeg',
              'gambar5.jpeg',
              'gambar6.jpeg',
              'gambar7.jpeg',
              'gambar8.jpeg',
              'gambar9.jpeg'
            ].map((imgName, i) => {
              // Menggunakan dynamic import untuk asset internal di Vite agar tidak pecah saat deploy
              const imgUrl = new URL(`./assets/${imgName}`, import.meta.url).href;
              
              return (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 overflow-hidden shadow-sm cursor-pointer transform transition duration-300 hover:scale-110 hover:rotate-2"
                >
                  <img 
                    src={imgUrl} 
                    alt={`Design ${i + 1}`} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/150x150/fdf2f8/f472b6?text=🎨';
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* MIDDLE COLUMN: PROJECTS LIST */}
        <section id="projects" className="lg:col-span-4 bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/40 transition duration-300 hover:shadow-md">
          <h2 className="text-3xl font-black text-center text-sky-400/80 mb-6 tracking-widest italic border-b border-sky-100 pb-2">PROJECTS</h2>
          
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <h3 className="font-bold text-gray-800 group-hover:text-sky-400 transition-colors">PROJECTS {item}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span className="inline-block text-[10px] text-sky-400 font-bold border border-sky-200 bg-sky-50 px-2 py-0.5 rounded-md mt-2 transition duration-300 group-hover:bg-sky-400 group-hover:text-white">
                  Case Study Here
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT COLUMN: ABOUT, CONTACT, SKILLS */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* ABOUT CARD */}
          <section id="about" className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/40 flex gap-4 items-center transition duration-300 hover:shadow-md">
            <div className="w-16 h-16 rounded-full bg-pink-200 border-2 border-white overflow-hidden shadow-inner flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl">🐱</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-pink-400">ABOUT</h2>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </section>

          {/* CONTACT CARD */}
          <section id="contact" className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/40 transition duration-300 hover:shadow-md">
            <h2 className="text-xl font-bold text-center text-sky-400 mb-4 tracking-wide">CONTACT</h2>
            <form onSubmit={handleContactSubmit} className="space-y-2 text-xs">
              <input type="text" placeholder="Name" required className="w-full bg-white/80 p-2 rounded-xl border border-gray-200 outline-none focus:border-sky-300" />
              <input type="email" placeholder="Email" required className="w-full bg-white/80 p-2 rounded-xl border border-gray-200 outline-none focus:border-sky-300" />
              <textarea placeholder="Message" rows="2" required className="w-full bg-white/80 p-2 rounded-xl border border-gray-200 outline-none focus:border-sky-300 resize-none"></textarea>
              <button type="submit" className="w-full bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 rounded-xl shadow-sm transition transform active:scale-95">
                CONTACT
              </button>
            </form>
          </section>

          {/* SKILLS CARD */}
          <section id="skills" className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/40 transition duration-300 hover:shadow-md">
            <h2 className="text-xl font-bold text-center text-purple-400 mb-4 tracking-wide">SKILLS</h2>
            <div className="flex justify-around items-center gap-2">
              {['Vite', 'React', 'CSS', 'Git'].map((skill, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-400 flex items-center justify-center text-[10px] font-bold bg-white">
                    {skill === 'React' ? '⚛️' : '✨'}
                  </div>
                  <span className="text-[10px] font-medium text-gray-500 mt-1">{skill}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-xs mt-12 pb-4">
        &copy; {new Date().getFullYear()} Nisa. Built with 💖 and Pastel Vibes.
      </footer>
    </div>
  );
}