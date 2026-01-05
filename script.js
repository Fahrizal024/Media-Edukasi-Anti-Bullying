const SPREADSHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbzNGe4-3v5uCjgyTmBknR6SMwWUS7ozQOH-o2ToJzj1V-afh364y7rQCgUILRGzbxpgOA/exec";

const app = document.getElementById("app");

/* =================================
   FUNGSI LOAD HALAMAN
================================= */
function loadPage(page) {

  /* =================================
     HALAMAN BERANDA (TIDAK DIUBAH)
  ================================= */
  if (page === "home") {
    app.innerHTML = `
      <section class="hero">
        <img 
          src="Gambar bullying.jpeg" 
          alt="Ilustrasi Stop Bullying"
          style="max-width:100%;border-radius:20px;box-shadow:0 4px 12px rgba(0,0,0,0.2);margin-bottom:20px;"
        >
        <h2>Stop Bullying</h2>
        <p style="max-width:700px;margin:auto;line-height:1.6;">
          <b>Bullying atau perundungan</b> adalah suatu tindakan agresif
          yang dilakukan oleh seseorang terhadap orang lain yang mentalnya
          lebih lemah atau sedang down.
        </p>
      </section>

      <section>
        <h2>📰 Artikel Edukasi</h2>
        <div class="card">
          <h4>Bullying di Kalangan Remaja</h4>
          <p>
            Fenomena bullying di kalangan remaja dapat berdampak serius
            terhadap kesehatan mental korban.
          </p>
          <a href="https://feb.umsu.ac.id/bullying-di-kalangan-remaja/" target="_blank">
            <button>Baca Artikel Lengkap</button>
          </a>
        </div>
      </section>
    `;
    return;
  }

  /* =================================
     HALAMAN EDUKASI (TIDAK DIUBAH)
  ================================= */
  if (page === "edukasi") {
    app.innerHTML = `
      <section>
        <h2>📘 Edukasi Anti-Bullying</h2>
        <div class="card" style="text-align:center;">
          <a href="https://youtu.be/BF4hRjaLHNE" target="_blank">
            <img
              src="https://img.youtube.com/vi/BF4hRjaLHNE/hqdefault.jpg"
              style="width:100%;max-width:560px;border-radius:15px;"
            >
          </a>
          <p>Klik gambar untuk menonton video</p>
        </div>
      </section>
    `;
    return;
  }

  /* =================================
     HALAMAN REFLEKSI (DIPERBAIKI)
  ================================= */
   if (page === "refleksi") {
    app.innerHTML = `
      <section>
        <h2>💭 Refleksi & Motivasi</h2>

        <!-- MOTIVASI UTAMA -->
        <div class="card">
          <p>
            <b>Setiap orang berhak merasa aman dan bahagia.</b>
            Jangan biarkan kata-kata atau tindakanmu merenggut itu.
            Ubah kelemahan menjadi kekuatan dengan membangun, bukan menjatuhkan.
            Jadilah cahaya yang menyinari, bukan bayangan yang menindas,
            karena empati dan kebaikan adalah senjata sejati melawan perundungan.
          </p>
        </div>

        <!-- PESAN UNTUK PELAKU & SAKSI -->
        <div class="card">
          <h4>📢 Pesan untuk Pelaku & Saksi Bullying</h4>
          <ul>
            <li>
              <b>Tindakan bullying adalah tanda kelemahan, bukan kekuatan.</b>
              Berani menghentikannya adalah tanda keberanian sejati.
            </li>
            <li>
              Jangan pernah membuat orang lain merasa kecil agar dirimu merasa besar.
              Kamu tidak akan pernah bisa berdiri di puncak jika terus mendorong orang lain ke bawah.
            </li>
            <li>
              Saksi bisu perundungan berarti menjadi bagian darinya.
              Jangan diam, berdiri tegak dan katakan tidak pada ketidakadilan.
            </li>
            <li>
              Kata-kata kasar meninggalkan luka tak terlihat, namun dampaknya nyata.
              Pikirkan dua kali sebelum mengucap, karena dampaknya bisa merusak masa depan.
            </li>
          </ul>
        </div>

        <!-- PESAN UNTUK KORBAN -->
        <div class="card">
          <h4>💙 Pesan untuk Korban & Pendukung</h4>
          <ul>
            <li>
              Kamu tidak sendirian. Beda itu indah, bukan alasan untuk diremehkan.
              Teruslah bersinar, karena kamu berharga apa adanya.
            </li>
            <li>
              Setiap individu punya nilai.
              Jangan biarkan definisi orang lain atas dirimu meredupkan cahayamu.
              Bangkit dan tunjukkan kekuatanmu!
            </li>
            <li>
              Mari ciptakan dunia di mana setiap orang merasa aman menjadi dirinya sendiri.
              Dukung korban, sebarkan kasih sayang, dan jadilah pahlawan bagi mereka yang lemah.
            </li>
          </ul>
        </div>

        <!-- PESAN KOMUNITAS -->
        <div class="card">
          <h4>🤝 Pesan untuk Kita Semua</h4>
          <ul>
            <li>
              Bersama kita bisa akhiri perundungan.
              Mulai dari diri sendiri, mulailah dengan kebaikan.
              Ciptakan lingkungan yang sehat, penuh hormat, dan tanpa rasa takut.
            </li>
            <li>
              Jangan biarkan tradisi negatif ini berlanjut.
              Mari bangun dunia yang lebih baik,
              di mana cinta dan empati lebih kuat dari kebencian dan intimidasi.
            </li>
          </ul>
        </div>

        <!-- KATA-KATA MENGGUGAH -->
        <div class="card">
          <h4>✨ Kata-kata yang Menggugah</h4>
          <p>
            Perundungan adalah penyakit sosial yang merusak jiwa.
            Obatnya adalah empati, penerimaan, dan keberanian untuk berbicara.
            Jangan biarkan luka ini mengering tanpa diobati.
          </p>
          <p>
            Jadilah jembatan, bukan jurang.
            Jadilah cahaya, bukan kegelapan.
            Pilihlah kata-kata yang menyembuhkan dan tindakan yang membangun.
            Kita semua berhak bahagia.
          </p>
        </div>

        <hr style="margin:30px 0">

        <!-- FORM REFLEKSI -->
        <div class="card">
          <h3>✍️ Refleksi Diri</h3>

          <label><b>Nama </b></label>
          <input
            type="text"
            id="namaPengguna"
            placeholder="Contoh: Anonim"
            style="width:100%;padding:8px;margin-bottom:15px;"
          >

          <label><b>Pernahkah kamu menyaksikan atau mengalami bullying?</b></label>
          <textarea id="jawaban1"></textarea>

          <label><b>Bagaimana perasaanmu?</b></label>
          <textarea id="jawaban2"></textarea>

          <label><b>Apa solusi menurutmu?</b></label>
          <textarea id="jawaban3"></textarea>

          <button onclick="simpanRefleksi()">Simpan Refleksi</button>

          <p id="notifRefleksi" style="font-weight:bold;margin-top:10px;"></p>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `<h2>Halaman tidak ditemukan</h2>`;
}

/* =================================
   SIMPAN REFLEKSI (DIPERBAIKI)
================================= */
function simpanRefleksi() {
  const nama =
    document.getElementById("namaPengguna").value.trim() || "Anonim";

  const j1 = document.getElementById("jawaban1").value.trim();
  const j2 = document.getElementById("jawaban2").value.trim();
  const j3 = document.getElementById("jawaban3").value.trim();

  const notif = document.getElementById("notifRefleksi");

  if (!j1 || !j2 || !j3) {
    notif.textContent = "⚠️ Semua jawaban wajib diisi.";
    notif.style.color = "red";
    return;
  }

  notif.textContent = "⏳ Mengirim refleksi...";
  notif.style.color = "black";

  // ===============================
  // KIRIM DATA DENGAN FORM ENCODE
  // ===============================
  const formData = new FormData();
  formData.append("nama", nama);
  formData.append("pengalaman", j1);
  formData.append("perasaan", j2);
  formData.append("solusi", j3);

  fetch(SPREADSHEET_API_URL, {
    method: "POST",
    body: formData
  })
    .then(() => {
      // Jika request sampai ke Apps Script,
      // kita anggap berhasil (praktik umum GAS)
      notif.textContent =
        "✅ Refleksi berhasil dikirim. Terima kasih sudah berbagi.";
      notif.style.color = "green";

      document.getElementById("jawaban1").value = "";
      document.getElementById("jawaban2").value = "";
      document.getElementById("jawaban3").value = "";
    })
    .catch(err => {
      console.error(err);
      notif.textContent =
        "❌ Gagal mengirim refleksi. Coba lagi.";
      notif.style.color = "red";
    });
}



/* =================================
   LOAD AWAL
================================= */
loadPage("home");
