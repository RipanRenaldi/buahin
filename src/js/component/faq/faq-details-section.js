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
          <h2>Apakah aplikasi ini bisa digunakan untuk mendeteksi jenis buah yang kita lihat secara langsung?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
          Ya, karena aplikasi web Buahin ini dilengkapi dengan fiur kamera sehingga user dapat langsung 
          mengambil gambar buah yang ingin dideteksi dengan fitur kamera, dan langsung mendeteksi jenis buah tersebut.
          </p>
        </section>
        <section class="accordion">
          <h2>Berapa lama waktu yang dibutuhkan untuk aplikasi ini mendeteksi jenis buah pada gambar?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Waktu yang dibutuhkan web ini untuk mendeteksi jenis buah pada gambar tidaklah lama, hanya dibutuhkan waktu paling lama 5 detik.
        </section>
        <section class="accordion">
          <h2>Bagaimana cara mengetahui hasil deteksi jenis buah yang tepat pada page Result of Scanning? </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Pada Page Results of Scanning akan diperlihatkan 3 besar kemungkinan jenis buah dari gambar yang di scan,
            dan jenis buah yang memiliki persentase paling tinggi lah yang merupakan jenis buah yang paling tepat.
          </p>
        </section>
        </div>
        `;
    this.setAttribute("class", "faqs");
  }
}

customElements.define("faq-details-section", FAQSection);
