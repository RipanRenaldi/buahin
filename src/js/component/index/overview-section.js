class OverviewSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        @media screen and (max-width: 550px) {
          .container {
            margin: 20px 10px;
            flex-direction: column-reverse;
          }
          
          .overview {
            margin-bottom: 40px;
            max-width: 100%;
          }

          .overview h1{
            font-size:1.7rem;
          }

          .overview p{
            font-size:0.9rem;
            max-width: 555px;
          }
        }

        @media screen and (max-width: 880px) {
          .container {
            margin: 30px 10px;
            flex-direction: column-reverse;
          }

          .overview {
            margin-bottom: 40px;
            max-width: 100%;
          }

          .overview h1{
            font-size:1.7rem;
          }

          .overview p{
            font-size:0.9rem;
            max-width: 555px;
          }

          .button{
            margin-top:2rem;
            font-size: 0.8rem;
            width: 150px;
            padding: 15px;
          }
        }
        </style>
    
        <div class="container" id="overview">
          <div class="overview">
            <h1>Detect Your Fruit Anytime Anywhere</h1>
            <p>
              Fruit Detector berbasis website yang siap memudahkan kalian dalam mengidentifikasi berbagai macam buah-buahan.
            </p>
            <div class="button">Get Started</div>
          </div>
          <div class="right-image">
            <div class="images">
              <img src="" alt="" id="test" />
            </div>
            <div class="images">
              <img src="" alt="" />
            </div>
            <div class="images">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define("overview-section", OverviewSection);
