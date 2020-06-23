class MyCustomTag extends HTMLElement {
  constructor() {
    alert("hi from constructor")
    super()
  }
  connectedCallback() {
    alert("hi from MyCustomTag")
    this.innerHTML = 
      `<h2>${this.getAttribute("title")}</h2>
      <button>Click me</button>
      `
  }
}

!customElements.get("my-custom-tag")
  ? customElements.define("my-custom-tag", MyCustomTag)
  : console.log("already mounted")


class CleanUp extends HTMLElement {
  connectedCallback() {
    this.counter = 100
    this.timer = setInterval(() => this.update(), 1000)
  }

  update() {
    this.innerHTML = this.counter
    this.counter --
    console.log(this.counter)
  }
  disconnectedCallback() {
    clearInterval(this.timer)
  }
}

!customElements.get("my-clean-up", CleanUp)
  ? customElements.define("my-clean-up", CleanUp)
  : console.log("already mounted")

