import { Controller } from "stimulus";

const firstPolitic = document.querySelector(`.politic--first`);
const secondPolitic = document.querySelector(`.politic--second`);
const overlay = document.querySelector(`.overlay`);

export default class extends Controller {
  static targets = [ `link` ]

  escPressHandler = (e) => {
    if(e.keyCode && e.keyCode === 27) {
      this.close()
    }
  }

  close = () => {
    const modals = document.querySelectorAll(`.politic`);

    modals.forEach(it => {
      if (it.classList.contains(`politic--active`)) {
        it.classList.remove(`politic--active`)
      }
    })
    overlay.classList.remove(`overlay--active`)

    document.removeEventListener(`keydown`, this.escPressHandler)
  }

  addClass = (e, modal) => {
    e.preventDefault()

    const scrollY = window.pageYOffset;

    modal.style.top = scrollY + document.documentElement.clientHeight / 2 - 250 + "px"
    modal.classList.add(`politic--active`)
    overlay.classList.toggle(`overlay--active`)

    document.addEventListener(`keydown`, this.escPressHandler)
  }

  removeClass = (e, modal) => {
    e.preventDefault()
    modal.classList.remove(`politic--active`)
    overlay.classList.remove(`overlay--active`)
  }

  showFirst(e) {
    this.addClass(e, firstPolitic)
  }

  closeFirst(e) {
    this.removeClass(e, firstPolitic)
  }

  showSecond(e) {
    this.addClass(e, secondPolitic)
  }

  closeSecond(e) {
    this.removeClass(e, secondPolitic)
  }
}
