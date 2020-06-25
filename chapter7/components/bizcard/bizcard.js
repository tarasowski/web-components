
export default class BizCard extends HTMLElement {
  static get observedAttributes() { return ["layout"] }

  attributeChangedCallback(
    name, oldValue, newValue) {
    this.innerHTML = ""
    const template = document.getElementById(newValue)
    const clone = template.content.cloneNode(true)
    this.appendChild(clone)
  }
}

!customElements.get("biz-card")
  ? customElements.define("biz-card", BizCard)
  : console.log("already in the DOM")
