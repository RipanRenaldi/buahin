class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <nav>
            <div class="logo">
                <h1>Buahin</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li><a href="./upload.html">Documentation</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('header-bar', HeaderBar);