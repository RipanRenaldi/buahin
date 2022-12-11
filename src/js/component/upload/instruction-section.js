class InstructionSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="content-details">
        <div class="how-to">
          <h1>Cara Menggunakan Website</h1>
          <div>
            <div class="row">
              <img src="" alt="" id="no-1" />
              <span class="step">
                Klik pada area "Upload file" untuk memilih dan mengupload
                gambar yang ingin dideteksi atau klik pada tombol kamera untuk
                memotret objek yang akan dideteksi.</span>
            </div>
            <div class="row">
              <img src="" alt="" id="no-2" />
              <span class="step">
                Klik tombol start untuk memulai proses deteksi objek</span>
            </div>
            <div class="row">
              <img src="" alt="" id="no-3" />
              <span class="step">
                Proses deteksi objek dimulai, tunggu hingga selesai</span>
            </div>
            <div class="row">
              <img src="" alt="" id="no-4" />
              <span class="step">
                Setelah selesai, Anda akan diarahkan ke halaman result untuk
                mengetahui hasil deteksi gambar Anda.
                <a href="./upload.html#upload">Coba Sekarang</a></span>
            </div>
          </div>
        </div>
        <div class="right-image">
          <img src="" alt="" id="right-image" />
        </div>
        </div>
        `;
  }
}

customElements.define("instruction-section", InstructionSection);
