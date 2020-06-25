
export default class BizCard extends HTMLElement {
  static get observedAttributes() { return ["layout"] }

  attributeChangedCallback(
    name, oldValue, newValue) {
    this.templates
      ? this.populateCards()
      : void 7
  }
  connectedCallback() {
    this.cardElement =
      document.createElement("div")
    this.templates = 
      document.createElement("div")
    this.appendChild(this.cardElement)
    this.appendChild(this.templates)
    fetch("http://localhost:8080/chapter7-remote/templates.html")
      .then(res => res.text())
      .then(res => {
        console.log(this.templates)
        this.templates.innerHTML = res
      })
      .then(() => this.populateCards())
  }

  populateCards() {
    console.log("is there something inside", this.templates)
    console.log("does it gets called")
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
