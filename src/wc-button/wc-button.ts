const templ = document.createElement("template");
templ.innerHTML = /*template*/ `
    <style>
      @import './components/reset.css';
      :host {
        zbackground-color: #ffcc00;
        display: inline-block; /* for proper sizing of <button> */
      }
      
      button {
        appearance: none;
        border: #434343 1px solid;
        border-radius: .75rem;
        background: var(--background, #cccccc);
        padding: .5rem;
        width: 100%; /* for proper sizing of <button> - will fill up the :host */
        height: 100%; /* for proper sizing of <button> */
        cursor: pointer;
        transition: background-color .2s;
        display: block;
      }
      button:hover {
        background-color: #e9e8e8;
      }
      button:active {
        background-color: #e1e0e0;
      }
    </style>

    <button>
      <slot></slot>
    </button>

`;

export class WcButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(templ.content.cloneNode(true));
  }
}

customElements.define("wc-button", WcButton);
