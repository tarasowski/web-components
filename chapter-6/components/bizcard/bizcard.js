import Template from "./template.js"

export class BizCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Template.render({
      first_name: "Emmet",
      last_name: "Browsn",
      title: "Student of all Sciences",
      phone: "55-4385",
      email: "emmet@docbrown.flux",
      website: "www.docbrown.flux",
      backgroundChoices: [
        {name: "big dots", uri: "./images/big-dot-pattern.png"},
        {name: "little dots", uri: "./images/tiny-dot-pattern.png"},
        {name: "squares", uri: "./images/square-pattern.png"},
        {name: "stripes", uri: "./images/stripes-pattern.png"},
        {name: "diamond", uri: "./images/diamond-pattern.png"},
      ],
      logoChoices: [
        {name: "mobius strip", uri: "./images/mobius-logo.png"},
        {name: "shopping bag", uri: "./images/bag-logo.png"},
        {name: "copper splash", uri: "./images/splash-logo.png"},
        {name: "star", uri: "./images/star-logo.png"},
        {name: "cone", uri: "./images/cone-logo.png"},
      ]
    })
  }
}

!customElements.get("biz-card")
  ? customElements.define("biz-card", BizCard)
  : console.log("already mounted")
