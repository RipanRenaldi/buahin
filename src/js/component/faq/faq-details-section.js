class FAQSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
          <h1>FAQs</h1>
          <h1>Frequently Asked Questions</h1>
          <p>Have Questions? We're Here to Help</p>
        </header>
        <div class="wrapper">
          <section class="accordion">
            <h2>Format gambar apa saja yang didukung oleh website?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            <p>
              JPG, JPEG, PNG
            </p>
          </section>
          <section class="accordion">
            <h2>Apakah website ini bisa digunakan untuk mendeteksi buah yang dilihat secara langsung?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            <p>
              Ya, karena website sudah dilengkapi dengan fitur kamera sehingga user dapat mengambil gambar buah yang ingin dideteksi dan langsung mendeteksi gambar tersebut.
            </p>
          </section>
          <section class="accordion">
            <h2>Berapa lama waktu yang dibutuhkan website untuk mendeteksi buah pada gambar?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            <p>
              Waktu yang dibutuhkan website untuk mendeteksi gambar tidak lama, paling lama hanya membutuhkan waktu 5 detik.
            </p>
          </section>
          <section class="accordion">
            <h2>Bagaimana cara mengetahui hasil deteksi yang tepat?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            <p>
              Pada halaman Result of Scanning akan diperlihatkan 3 besar kemungkinan buah dari gambar yang sudah dideteksi. Buah dengan persentase paling tinggi yang merupakan buah yang tepat.
            </p>
          </section>
        </div>
        `;
    this.setAttribute("class", "faqs");
  }
}

customElements.define("faq-details-section", FAQSection);
