customElements.define('content-box', class extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'closed' });
    root.innerHTML = `
      <style>
        .boxTitle {
          position: absolute;
          top: -1.85em;
          left: .8em;
          background-color: #242424;
          max-width: fit-content;
          padding: 0 0.3em;
        }
        
        .box {
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.87);
            border-radius: 8px;
            padding: 1em;
        }
      </style>
      <div class="box">
        <h3 class="boxTitle"><slot name="title" /></h3>
        <slot name="content"></slot>
      </div>
    `;
  }
})