
export default class BizCard extends HTMLElement {
  static get observedAttributes() { return ["layout"] }

  attributeChangedCallback(
    name, oldValue, newValue) {
    this.templates
      ? this.populateCards()
      : void 7
  }
  connectedCallback() {
    this.root = this.attachShadow({mode: "open"})
    this.cardElement =
      document.createElement("div")
    this.templates = 
      document.createElement("div")
    this.root.appendChild(this.cardElement)
    this.root.appendChild(this.templates)
    fetch("http://localhost:8080/chapter7-slots/templates.html")
      .then(res => res.text())
      .then(res => {
        console.log(this.templates)
        this.templates.innerHTML = res
      })
      .then(() => this.populateCards())
  }

  populateCards() {
    const template = this.templates.querySelector(
      "template." + this.getAttribute("layout"))
    if (template) {
      const clone = template.content.cloneNode(true)
      this.cardElement.innerHTML = ""
      this.cardElement.appendChild(clone)
    }
      
  }

}

!customElements.get("biz-card")
  ? customElements.define("biz-card", BizCard)
  : console.log("already in the DOM")
