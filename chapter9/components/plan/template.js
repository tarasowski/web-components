export default {
  render(props) {
    return `
      ${this.html(props)}
      ${this.css(props)}
      `
  },
  html(props) {
    return `
    <h1>My Plan</h1>
    <div id="container"></div>
    <div id="time">Total Time:</div>
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
      #time {
        height: 30px;
      }
      #container {
        background: linear-gradient(90deg, rgba(235,235,235,1)
        0%, rgba(208,208,208,1) 100%);
        height: calc(100% - 60px);
        overflow-y: scroll;
      }
      h1 {
        font-size: var(--header-font-size);
      }
      </style>
      `
  },
}
