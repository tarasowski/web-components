import Template from "./template"

export default class Exercise extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: "open"})

    const params = {
      label: this.getAttribute("label"),
      type: this.getAttribute("type"),
      thumb: this.getAttribute("tumub"),
      time: this.getAttribute("time"),
      count: this.getAttribute("count"),
      estimatedTimePerCount: this.getAttribute("estimatedtimepercount"),
      sets: this.getAttribute("sets")
    }

    this.shadowRoot.innerHTML = Template.render(params)
  }
  get label() { return this.getAttribute("label") }
  set label(val) { return this.setAttribute("label", val) }

  get type() { return this.getAttribute("type") }
  set type(val) { return this.setAttribute("type", val) }

  get thumb() { return this.getAttribute("thumb") }
  set thumb(val) { return this.setAttribute("thumb", val) }

  get time() { return this.getAttribute("time") }
  set time(val) { return this.setAttribute("time", val) }

  get count() { return this.getAttribute("count") }
  set count(val) { return this.setAttribute("count", val) }

  get estimatedTimePerCount() { return this.getAttribute("estimatedTimePerCount") }
  set estimatedTimePerCount(val) { return this.setAttribute("estimatedTimePerCount", val) }

  get sets() { return this.getAttribute("sets") }
  set sets(val) { return this.setAttribute("sets", val) }

  serialize() {
    return {
      label: this.label,
      type: this.type,
      thumb: this.thumb,
      time: this.time,
      count: this.count,
      estimatedTimePerCount: this.estimatedTimePerCount,
      sets: this.sets
    }
  }
  static toAttributeString(obj) {
    let attr = ""
    for (let key in obj) {
      if (obj[key]) {
        attr += key + `="` + obj[key] + `" `
      }
    }
    return attr 
  }
}

!customElements.get("wkout-exercise") 
  ? customElements.define("wkout-exercise", Exercise)
  : void 7
