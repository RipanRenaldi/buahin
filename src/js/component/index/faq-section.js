class FAQSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <style>
        @media screen and (max-width: 550px) {
          .faq h1 {
            font-size: 1.5rem;
            margin-bottom: 50px;
          }
          .faq .wrapper {
            margin: 20px;
          }
          .faq .wrapper .accordion {
            width: 100%;
            padding:20px;
            margin-bottom: 40px;
          }
          .active {
            height: 400px;
          }
          .accordion > svg{
            max-width:33px;
            right:20px;
          }
          .faq .wrapper h2 {
            font-size: 1rem;
            max-width: 85%;
          }
          .faq .wrapper p {
            font-size: 0.8rem;
            max-width: 83%;
          }
          .more-questions{
            font-size: 0.8rem;
            width:180px;
            padding:15px 20px;
          }
        }

        @media screen and (max-width: 880px) {
          .faq {
            margin: 50px 10px;
          }
          .faq h1 {
            font-size: 1.7rem;
            margin-bottom: 50px;
          }
          .faq .wrapper {
            margin: 20px;
          }
          .faq .wrapper .accordion {
            width: 100%;
            padding:30px;
            margin-bottom: 40px;
          }
          .active {
            height: 220px;
          }
          .accordion > svg{
            max-width:35px;
            right:20px;
          }
          .faq .wrapper h2 {
            font-size: 1.2rem;
            max-width: 85%;
            margin-bottom: 50px;
          }
          .faq .wrapper p {
            font-size: 0.85rem;
            max-width: 85%;
          }
          .more-questions{
            font-size: 0.8rem;
            width:155px;
            padding:15px 20px;
          }
          
        }
        </style>

        <h1>Frequently Asked Questions</h1>
        <div class="wrapper">
        <section class="accordion">
          <h2>Apa itu aplikasi Fruit Detector "Buahin"?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Fruit Detector merupakan sebuah aplikasi deteksi jenis buah berbasis website
            yang menggunakan model Machine Learning dalam proses deteksi objeknya.
          </p>
        </section>
        <section class="accordion">
          <h2>Bagaimana cara mendeteksi objek gambar?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Secara singkat, Anda perlu mengupload sebuah gambar atau memotret melalui kamera untuk memasukkan gambar
            yang akan dideteksi.
            Kemudian klik tombol start, lalu tunggu proses deteksi hingga selesai dan hasil deteksi muncul di layar.
            Untuk cara selengkapnya klik tautan berikut : <a href="./upload.html">Dokumentasi</a>
          </p>
        </section>
        <section class="accordion">
          <h2>Format gambar apa saja yang didukung?</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            JPG, JPEG, PNG
          </p>
        </section>
        </div>
        <a href="faq.html" class="more-questions">More Questions..</a>
        `;
        this.setAttribute('class', 'faq');
    }
}

customElements.define('faq-section', FAQSection);
