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
    "<wkout-exercise class=" + e.type + "></wkout-exercise>").join("")}
    </div>
    `
  },
  css(props) {
    return `
    <style>
    :host {
      display: flex;
      flex-direction: column;
    }
    #container {
      overflow-y: scroll;
      height: calc(100% - 60px);
    }
    </style>
    `
  },
}
