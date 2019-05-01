import * as InstantClick from "instantclick";

window.onload = () => {
  new Promise((resolve, reject) => {
    return resolve(InstantClick.init());
  })
}
