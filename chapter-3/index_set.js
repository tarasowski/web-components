import { POLY } from "../env"
const url = `https://poly.googleapis.com/v1/assets?keywords=parrot&format=OBJ&key=${POLY}`


class PolySearch extends HTMLElement {
  connectedCallback() {
    this.doSearch()
  }

  set apiKey(value) {
    this._apiKey = value
    this.doSearch()
  }
  set searchTerm(value) {
    this._searchTerm = value
    this.doSearch()
  }

  get searchTerm() {
    return this._searchTerm
  }

  doSearch() {
    if (this._apiKey && this._searchTerm) {
      const url = `https://poly.googleapis.com/v1/assets?keywords=${this._searchTerm}&format=OBJ&key=${this._apiKey}`
      fetch(url)
        .then(response => response.json())
        .then(res => res.assets)
        .then(x => this.renderResults(x))
    }
  }

  renderResults(assets) {
    console.log(assets)
    const output = assets.map(asset => `<img src="${asset.thumbnail.url}" width="200" height="150" />`).join("")
    this.innerHTML = output
  }
}

customElements.define("myapp-poly-search", PolySearch)
document.querySelector("myapp-poly-search").searchTerm = "parrot"
document.querySelector("myapp-poly-search").apiKey = POLY
