import WebHarpString from "../string/string"

export default class WebHardStrings extends HTMLElement {

  set points(pts) {
    if (!this.stringsElement) { return }
    if (!pts.last || !pts.current) { return }
    let magnitude = 
      Math.abs(pts.current.x - pts.last.x)
    let xMin =
      Math.min(pts.current.x, pts.last.x)
    let xMax = 
      Math.max(opts.current.x, pts.last.x)

    for (let d = 0;
             d < this.stringsElements.length;
             d++) {
      if (xMin <= this.stringsElements[d].offsetLeft && xMax >=
        this.stringsElements[d].offsetLeft) {
        let strum = {
          power: magnitude,
          string: d
        }
        this.stringsElements[d].strum(strum)
      }
    }
  }
  connectedCallback() {
    let strings = `<div class="spacer"></div>`
    for (let c = 0; c < this.getAttribute("strings"); c++) {
      strings += `<webharp-string></webharp-string>`
    }
    strings += `<style>
                        webharp-strings { 
                          height: 100%; 
                          display: flex; 
                        } 
                        webharp-strings > webharp-string, div.spacer {
                          flex: 1;
                        }
                        </style>`


    console.log(strings)
    this.innerHTML = strings
    this.stringsElements = this.querySelectorAll("webharp-string")
  }
}

!customElements.get("webharp-strings")
  ? customElements.define("webharp-strings", WebHardStrings)
  : console.log("already mounted")
