import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import Tabs from "%modules%/tabs/tabs"
import { $, $$ } from "./util";


Turbolinks.start();

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));


const tabs = $(`[data-tabs]`);
new Tabs(tabs);

//Открыть меню
let toggleNav = document.querySelector(".header__toggle");
let mainNav = document.querySelector(".header__nav");

toggleNav.addEventListener("click", function () {
  if (mainNav.classList.contains("header__nav--close")) {
    mainNav.classList.remove("header__nav--close");
    mainNav.classList.add("header__nav--active");
  } else {
    mainNav.classList.add("header__nav--close");
    mainNav.classList.remove("header__nav--active");
  }
});
