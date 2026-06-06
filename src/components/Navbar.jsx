import React from 'react';

function Navbar() {
  return (
    <nav className="w-full max-w-5xl mx-auto px-6 py-4 flex justify-between items-center border-b border-slate-800 backdrop-blur bg-slate-950/50 sticky top-0 z-50">
      <div className="text-xl font-mono font-bold tracking-wider text-emerald-400">
        Portofolio
      </div>
      <div className="flex gap-6 font-mono text-sm text-slate-400">
        <a href="#about" className="hover:text-emerald-400 transition">About</a>
        <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
        <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;