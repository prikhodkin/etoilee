import { Controller } from "stimulus";
import { tns } from "tiny-slider/src/tiny-slider"

export default class extends Controller {
  static targets = [ `next`, `prev`, `list` ]

  initialize() {
    if(window.matchMedia(`(max-width: 1280px)`).matches) {
      this.init();
    }
  }

  init() {
    const slider = tns({
      container: this.listTarget,
      items: 1,
      controls: true,
      nav: false,
      loop: false,
      swipeAngle: false,
      speed: 400,
      nextButton: this.nextTarget,
      prevButton: this.prevTarget,
      responsive: {
        600: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    });
  }
}
