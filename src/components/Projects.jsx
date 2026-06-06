import React from 'react';

function Projects() {
  // Data proyek ku
  const listProyek = [
    {
      id: 1,
      judul: "Network Packet Analyzer",
      deskripsi: "Alat analisis lalu lintas jaringan sederhana untuk mendeteksi anomali paket data.",
      tech: ["Python", "Wireshark", "Tshark"],
    },
    {
      id: 2,
      judul: "Personal Cyber Portfolio",
      deskripsi: "Web portofolio interaktif dengan performa tinggi menggunakan React dan Tailwind v4.",
      tech: ["React", "Vite", "Tailwind CSS"],
    },
    {
      id: 3,
      judul: "Security Risk Assessment Tool",
      deskripsi: "Aplikasi berbasis web untuk menghitung skor risiko keamanan berdasarkan framework NIST.",
      tech: ["JavaScript", "React", "Tailwind"],
    }
  ];

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-mono font-bold text-emerald-400 mb-8 flex items-center gap-2">
        <span className="text-slate-600">&gt;</span> Proyek_Saya
      </h2>
      
      {/* Grid Kartu Proyek */}
      <div className="grid md:grid-cols-3 gap-6">
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="p-6 bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition duration-300 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition mb-2">
                {proyek.judul}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {proyek.deskripsi}
              </p>
            </div>
            
            {/* Tag Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {proyek.tech.map((techName, index) => (
                <span key={index} className="px-2 py-0.5 bg-slate-800 text-slate-300 font-mono text-xs rounded border border-slate-700">
                  {techName}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;