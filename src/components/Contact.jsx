import React, { useState } from 'react';

function Contact() {
  // State untuk menyimpan inputan dari form
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  // Fungsi yang berjalan saat tombol kirim ditekan
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah browser me-refresh halaman
    
    // Tampilkan pop-up simulasi pengiriman data
    alert(`[SYSTEM] Pesan dari ${nama} (${email}) berhasil dienkripsi dan dikirim!\n\nIsi Pesan: "${pesan}"`);
    
    // Kosongkan kembali form setelah dikirim
    setNama('');
    setEmail('');
    setPesan('');
  };

  return (
    <section id="contact" className="w-full max-w-xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-mono font-bold text-emerald-400 mb-6 flex items-center gap-2">
        <span className="text-slate-600">&gt;</span> Hubungi_Saya
      </h2>

      {/* Form Kontak */}
      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-slate-900 border border-slate-800 rounded-xl">
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1">DATA_INPUT // NAME</label>
          <input 
            type="text" 
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition text-sm font-mono"
            placeholder="Masukkan nama kamu..."
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1">DATA_INPUT // EMAIL</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition text-sm font-mono"
            placeholder="nama@email.com"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1">DATA_INPUT // MESSAGE</label>
          <textarea 
            rows="4"
            required
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition text-sm font-mono resize-none"
            placeholder="Tulis pesanmu di sini..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:scale-98 transition text-slate-950 font-mono font-bold rounded-lg shadow-lg shadow-emerald-500/10 text-sm cursor-pointer"
        >
          EXECUTE_SEND_MESSAGE_
        </button>
      </form>
    </section>
  );
}

export default Contact;