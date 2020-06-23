import { POLY } from "../env"
const url = `https://poly.googleapis.com/v1/assets?keywords=parrot&format=OBJ&key=${POLY}`

console.log(POLY)

class PolySearch extends HTMLElement {
  constructor() {
    super()
    this.apikey = POLY
  }
//  connectedCallback() {
//    // Once the component is in the DOM run doSearch()
//    this.doSearch()
  //
//  }
  //  in version 0.x of web components attributeChangedCallback was always called
  //  but it was not conviniet and very efficient e.g. if style attribute changes it gets called
  //  so therefore the observedAttributes method was introduces to listen specific changes
  static get observedAttributes() {
    return ["searchterm"]
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "searchterm") {
      this.doSearch()
    }
  }

  // adding get / set so the attributes and properties are in sync for reflection
  get searchTerm() {
    return this.getAttribute("searchterm")
  }

  set searchTerm(val) {
    return this.setAttribute("searchTerm", val)
  }

  set apikey(val) {
    return this.setAttribute("apikey", val)
  }

  get apikey() {
    return this.getAttribute("apikey")
  }

  connectedCallback() {
    if (this.hasAttribute("thumbheight")) {
      this._thumbheight = this.getAttribute("thumbheight")
      this._thumbwidth = (this.getAttribute("thumbwidth") * 1.333)
    } else {
      this._thumbheight = 150
      this._thumbwidth = 200
    }
    if (this.getAttribute("backgroundcolor")) {
      this.style.backgroundColor = this.getAttribute("backgroundcolor")
    }
  }

  doSearch() {
    console.log(this.getAttribute("apikey"), "api key")
    if (this.getAttribute("apiKey") && this.getAttribute("searchTerm")) {
      this._searchTerm = this.getAttribute("searchterm")
      this._apiKey = this.getAttribute("apikey")
      this._baseUrl = this.getAttribute("baseurl")
      const url = `${this._baseUrl}?keywords=${this._searchTerm}&format=OBJ&key=${this._apiKey}`
      fetch(url)
        .then(response => response.json())
        .then(res => console.log(res) || res.assets)
        // Calls the endpoint and gets the data
        // Once the data is here it passes into renderResults
        .then(x => this.renderResults(x))
    }
  }

  renderResults(assets) {
    const output = assets.map(asset => 
      `<img src="${asset.thumbnail.url}" width="${this._thumbwidth}" height="${this._thumbheight}" />`).join("")
    // here the data is added to the innerHTML of the component
    console.log(output)
    this.innerHTML = output
  }
}

customElements.define("myapp-poly-search", PolySearch)

