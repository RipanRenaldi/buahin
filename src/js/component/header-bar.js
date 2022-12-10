class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <style>
        @media screen and (max-width: 550px) {
            nav ul li {
                font-size: 10px;
                margin-right: 3px;
            }
            .logo {
                font-size: 11px;
            }
        }

        @media screen and (max-width: 880px) {
            nav ul li {
                font-size: 12px;
            }
            .logo {
                font-size: 15px;
            }
        }
        </style>

        <nav>
            <div class="logo">
                <h1>Buahin</h1>
            </div>
            <ul>
                <li><a href="./index.html#">Home</a></li>
                <li><a href="./index.html#overview">Overview</a></li>
                <li><a href="./index.html#our-team">Our Team</a></li>
                <li><a href="./upload.html">Documentation</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('header-bar', HeaderBar);
