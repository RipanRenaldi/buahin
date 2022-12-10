class OverviewSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <div class="container" id="overview">
        <div class="overview">
          <h1>Detect Your Fruit Anytime Anywhere</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusamus provident non rem assumenda mollitia facilis. Et ab
            corporis doloribus quos odio? Error sunt vel sapiente tempore hic
            aliquam expedita quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique architecto omnis repudiandae dolores
            cupiditate quam dolor.
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

customElements.define('overview-section', OverviewSection);