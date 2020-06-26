import ExerciseLibrary from "../exerciselibrary/exersicelibrary"
import Plan from "../plan/plan.js"

export default {
  render(props) {
    return `${this.html(props)}
            ${this.css(props)}`
  },
  mapDOM(scope) {
    return {
      library: scope.querySelector("wkout-exercise-lib"),
      plan: scope.querySelector("wkout-plan")
    }
  },
  html(props) {
    return `<wkout-exercise-lib>
            </wkout-exercise-lib>
            <div id="divider-line"></div>
            <wkout-plan></wkout-plan>
      `
  },
  css(props) {
    return `
    <style>
    :host {
      display: flex
    }
    wkout-exercise-lib,
    wkout-plan {
      flex: 1;
      height: 100vh;
      background-color: #eaeaea;
    }
    #divider-line {
      width: 1px;
      height: 100%;
      margin-right: 25px;
      background-color: black;
    }
    </style>`
  }

}
