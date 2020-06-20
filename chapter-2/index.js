customElements.define("my-custom-tag", class extends HTMLElement {})

console.log(
  !customElements.get("my-custom-tag")
)

class Slider extends HTMLElement {
  connectedCallback() {
  // is fired when the element is added to the DOM
    console.log("Hi from Slider")
    this.innerHTML = '<div class="bg-overlay"></div><div class="thumb"></div>'
    this.style.display = "inline-block"
    this.style.position = "relative"
    this.style.width = "500px"
    this.style.height = "50px"

    this.querySelector(".bg-overlay").style.width = "100%"
    this.querySelector(".bg-overlay").style.height = "100%"
    this.querySelector(".bg-overlay").style.position = "absolute"
    this.querySelector(".bg-overlay").style.backgroundColor = this.getAttribute("backgroundcolor")

    this.querySelector(".thumb").style.marginLeft = this.getAttribute("value") + "px"
    this.querySelector(".thumb").style.width = "5px"
    this.querySelector(".thumb").style.height = "calc(100% - 5px)"
    this.querySelector(".thumb").style.position = "absolute"
    this.querySelector(".thumb").style.border = "3px solid white"
    this.querySelector(".thumb").style.borderRadius = "3px"
  }
}

// we give a namespace wcia for the web component
// so it can be used anywhere
!customElements.get("wci-slider")
  ? customElements.define("wcia-slider", Slider)
  : console.log("already mounted")


class PhotoCarousel extends HTMLElement {
  connectedCallback() {
    this._photoIndex = 0
    this._photos = this.getAttribute("photos").split(",")
    console.log(this._photos)
    this.innerHTML = `
    <style>
    wcia-photo-carousel {
      width: 500px;
      height: 300px;
      display: flex;
      padding-top: 10px;
      flex-direction: column;
      border-color: black;
      border-width: 1px;
      border-style: solid;
    }
    wcia-photo-carousel h2, h4 {
      margin-bottom: 0;
      margin-top: 0;
      margin-left: 10px;
    }
    wcia-photo-carousel .image-container {
      margin-top: 15px;
      flex: 1;
      background-color: black;
    }
    wcia-photo-carousel .image-container {
      margin-top: 15px;
      flex: 1;
      background-color: black;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
    }
    </style>
    <h2>${this.getAttribute("title")}</h2>
    <h4>by ${this.getAttribute("author")}</h4>
    <div class="image-container"></div>
    <button class="back">&lt</button>
    <button class="forward">&gt</button>
    `
    this.showPhotos()
    this.querySelector("button.back").addEventListener("click", event =>
      this.onBackButtonClick(event))
    this.querySelector("button.forward").addEventListener("click", event =>
      this.onForwardButtonClick(event))
  }
  showPhotos() {
    this.querySelector(".image-container").style.backgroundImage = 
      `url(${this._photos[this._photoIndex]})`
  }
  onBackButtonClick(event) {
    this._photoIndex ++;
    if (this._photoIndex < 0) {
      this._photoIndex = this._photos.length-1
    }
    this.showPhotos()
  }

  onForwardButtonClick(event) {
    this._photoIndex ++;
    if (this._photoIndex >= this._photos.length) {
      this._photoIndex = 0
    }
    this.showPhotos()
  }
}

!customElements.get("wcia-photo-carousel")
  ? customElements.define("wcia-photo-carousel", PhotoCarousel)
  : console.log("already mounted")
