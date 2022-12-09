class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <p>&copy; 2022 | <strong>Team C22-172 SIB Batch 3 Dicoding</strong></p>
        `;
    }
}

customElements.define('footer-bar', FooterBar);