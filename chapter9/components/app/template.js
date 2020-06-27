import ExerciseList from "../exerciselist/exerciselist"
import Plan from "../plan/plan.js"

export default {
  render(props) {
    return `${this.html(props)}
            ${this.css(props)}`
  },
  mapDOM(scope) {
    return {
      library: scope.querySelector("wkout-exercise-list"),
      plan: scope.querySelector("wkout-plan")
    }
  },
  html(props) {
    return `<wkout-exercise-list>
            </wkout-exercise-list>
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
    wkout-exercise-list,
    wkout-plan {
      flex: 1;
      height: 100vh;
      background-color: #eaeaea;
    }
    #divider-line {
      width: 1px;
      height: 100%;
      margin-right: 25px;
      background-color: var(--text-color);
    }
    </style>`
  }

}
