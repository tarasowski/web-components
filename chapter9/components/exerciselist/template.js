export default {
  render(props) {
    return `${this.html(props)}
     ${this.css(props)}
     `
  },
  html(props) {
    return `
    <h1>Exercises</h1>
    <div id="container">
    ${props.map(e => 
    "<wkout-exercise label=" + e.label + " class=" + e.type + "></wkout-exercise>").join("")}
    </div>
    `
  },
  css(props) {
    return `
    <style>
    :host {
      display: flex;
      flex-direction: column;
      font-family: var(--font);
      color: var(--text-color);
    }
    #container {
      overflow-y: scroll;
      height: calc(100% - 60px);
    }
    h1 {
      font-size: var(--header-font-size);
    }
    </style>
    `
  },
}
