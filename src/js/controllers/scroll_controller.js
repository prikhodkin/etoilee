import { Controller } from "stimulus";
import SimpleBar from "simplebar";

export default class extends Controller {
  static targets = [ `item`]

  initialize() {
    new SimpleBar(this.itemTarget, {
      forceVisible: true | false,
      autoHide: false
    });
  }
}
