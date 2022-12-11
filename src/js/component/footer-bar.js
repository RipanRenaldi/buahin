class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        @media screen and (max-width: 550px) {
            footer-bar {
                margin-top: 80px;
                font-size: 0.8rem;
            }
        }

        @media screen and (max-width: 880px) {
            footer-bar {
                margin-top: 80px;
                font-size: 0.9rem;
            }
        }
        </style>

        <p>&copy; 2022 | <strong>Team C22-172 SIB Batch 3 Dicoding</strong></p>
        `;
  }
}

customElements.define("footer-bar", FooterBar);
