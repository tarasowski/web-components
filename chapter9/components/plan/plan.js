import Template from "./template"

export default class Plan extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML = Template.render()
  }
}

!customElements.get("wkout-plan")
  ? customElements.define("wkout-plan", Plan)
  : void 7
