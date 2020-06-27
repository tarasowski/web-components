export default {
  render(exercise) {
    console.log(exercise)
    return `
    ${this.html(exercise)}
    ${this.css(exercise)}
    `
  },
  html(exercise) {
    return `
    <div id="info"></div>
      <span id="label">${exercise.label}</span>
      <span id="delete">x</span>
      `
  },
  css(exercise) {
    return `
    <style>
      :host {
        font-family: var(--font);
        display: inline-block;
        background: radial-gradient(circle,
        rgba(235,235,235,1) 0%, rgba(208,208,208,1) 100%);
        /*background-image: url("${exercise.thumb}");*/
        broder-left-style: solid;
        border-left-width: 5px;
      }
      :host(.cardio) {
        border-left:5px solid #28a7ff; 
      }
      :host(.strength) {
        border-left:5px solid #75af01;
      }
      #info {
        font-size: small;
        display: flex;
        align-items: center;
        background-color: var(--label-color);
        color: white;
      }
      :host {
        width: 200px;
        height: 200px;
        background-size: cover;
      }
      :host #info {
      padding: 5px;
    }
    </style>
    `
  }
}
