const templ = document.createElement("template");
templ.innerHTML = /*template*/ `
    <style>
      @import '/styles/reset.css';
      :host {
        zbackground-color: #ffcc00;
        display: inline-block; /* for proper sizing of <button> */
      }

      button {
        appearance: none;
        border: #434343 1px solid;
        border-radius: .75rem;
        background-color: var(--background, #cccccc);
        padding: .5rem 1rem;
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

      :host([secondary]) button, :host([simple]) button {
        padding: .25rem .5rem;
      }

      :host([simple]) button {
        border: none;
        background: transparent;
        color: #088ac6;
      }

      :host([disabled]) button {
        opacity: .35;
        pointer-events: none;
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
