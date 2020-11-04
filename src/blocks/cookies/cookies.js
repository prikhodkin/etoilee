import { nodeName } from "jquery";
import {setCookie, getCookie} from "../../js/util/cookie"

const modal = document.querySelector(`.cookies`);

export const initialCookieModal = () => {
  const isFirst = getCookie('is_first');

  if (!isFirst) {
    addIsFirstInfo()
  } else {
    modal.classList.add(`cookies--hidden`)
  }
}

const addIsFirstInfo = () => {
  const acceptButton = modal.querySelector(`.button--grad`)
  const denyButton = modal.querySelector(`.button--white`)

  acceptButton.addEventListener(`click`, ()=>{
    setCookie('is_first', 'false', { expires:365 })
    modal.classList.add(`cookies--hidden`)
  })

  denyButton.addEventListener(`click`, () => {
    modal.classList.add(`cookies--hidden`)
  })
}

