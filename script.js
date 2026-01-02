const app = document.getElementById("app");

/* =================================
   FUNGSI LOAD HALAMAN
================================= */
function loadPage(page) {

  /* =================================
     HALAMAN BERANDA
  ================================= */
  if (page === "home") {
    app.innerHTML = `
      <!-- SECTION: HERO VISUAL & DEFINISI -->
      <section class="hero">
        <img 
          src="Gambar bullying.jpeg" 
          alt="Ilustrasi Stop Bullying"
          style="
            max-width:100%;
            border-radius:20px;
            box-shadow:0 4px 12px rgba(0,0,0,0.2);
            margin-bottom:20px;
          "
        >

        <h2>Stop Bullying</h2>

        <p style="max-width:700px;margin:auto;line-height:1.6;">
          <b>Bullying atau perundungan</b> adalah suatu tindakan agresif
          yang dilakukan oleh seseorang terhadap orang lain yang mentalnya
          lebih lemah atau sedang down, dengan tujuan menyakiti secara
          psikologis maupun fisik.
        </p>
      </section>

      <!-- SECTION: ARTIKEL EDUKASI -->
      <section>
        <h2>📰 Artikel Edukasi</h2>

        <div class="card">
          <h4>Bullying di Kalangan Remaja</h4>

          <p>
            Fenomena bullying di kalangan remaja dapat berdampak serius
            terhadap kesehatan mental dan perkembangan psikologis korban.
          </p>

          <p style="font-size:0.9em;color:#555;">
            Sumber: Fakultas Ekonomi dan Bisnis
            Universitas Muhammadiyah Sumatera Utara
          </p>

          <a 
            href="https://feb.umsu.ac.id/bullying-di-kalangan-remaja/" 
            target="_blank"
          >
            <button>Baca Artikel Lengkap</button>
          </a>
        </div>
      </section>
    `;
    return;
  }

  /* =================================
     HALAMAN EDUKASI (DIPERBAIKI)
  ================================= */
  if (page === "edukasi") {
    app.innerHTML = `
      <!-- SECTION: EDUKASI VIDEO -->
      <section>
        <h2>📘 Edukasi Anti-Bullying</h2>

        <p>
          Video berikut memberikan pemahaman mengenai bullying,
          dampaknya, serta pentingnya peran kita dalam menghentikannya.
        </p>

        <div class="card" style="text-align:center;">

          <!-- THUMBNAIL YOUTUBE (PASTI MUNCUL) -->
          <a 
            href="https://youtu.be/BF4hRjaLHNE?si=g-Hx_zxWHdR4MZ-b" 
            target="_blank"
          >
            <img
              src="https://img.youtube.com/vi/BF4hRjaLHNE/hqdefault.jpg"
              alt="Video Edukasi Stop Bullying"
              style="
                width:100%;
                max-width:560px;
                border-radius:15px;
                box-shadow:0 4px 12px rgba(0,0,0,0.25);
                cursor:pointer;
              "
            >
          </a>

          <p style="margin-top:10px;font-size:0.9em;">
            Klik gambar untuk menonton video di YouTube
          </p>
        </div>
      </section>
    `;
    return;
  }

  /* =================================
     HALAMAN REFLEKSI
  ================================= */
  if (page === "refleksi") {
    app.innerHTML = `
      <!-- SECTION: REFLEKSI & MOTIVASI -->
      <section>
        <h2>💭 Refleksi & Motivasi</h2>

        <div class="card">
          <p>
            Setiap orang berhak merasa aman dan bahagia. Jangan biarkan
            kata-kata atau tindakanmu merenggut itu. Empati dan kebaikan
            adalah senjata sejati melawan perundungan.
          </p>

          <p><b>Pesan untuk Pelaku & Saksi:</b></p>
          <ul>
            <li>Bullying adalah tanda kelemahan, bukan kekuatan.</li>
            <li>Diam berarti ikut membiarkan ketidakadilan.</li>
          </ul>

          <p><b>Pesan untuk Korban:</b></p>
          <ul>
            <li>Kamu tidak sendirian.</li>
            <li>Beda itu indah, kamu berharga apa adanya.</li>
          </ul>

          <p><b>Pesan Komunitas:</b></p>
          <p>
            Bersama kita bisa mengakhiri perundungan dengan menciptakan
            lingkungan yang aman, sehat, dan penuh empati.
          </p>
        </div>
      </section>
    `;
    return;
  }

  function kirimRefleksi() {
  const r1 = document.getElementById("ref1").value.trim();
  const r2 = document.getElementById("ref2").value.trim();
  const r3 = document.getElementById("ref3").value.trim();
  const notif = document.getElementById("notifRefleksi");

  if (!r1 || !r2 || !r3) {
    notif.style.color = "red";
    notif.innerText = "⚠️ Semua pertanyaan harus diisi.";
    return;
  }

  notif.style.color = "green";
  notif.innerText = "✅ Terima kasih, refleksimu berhasil dikirim.";
}

  /* =================================
     DEFAULT
  ================================= */
  app.innerHTML = `
    <section>
      <h2>Halaman tidak ditemukan</h2>
      <p>Silakan pilih menu yang tersedia.</p>
    </section>
  `;
}

/* =================================
   LOAD HALAMAN AWAL
================================= */
loadPage("home");
