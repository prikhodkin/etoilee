import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import {initialCookieModal} from "../blocks/cookies/cookies"
import $ from "jquery";
initialCookieModal()

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));



//Открыть меню
let toggleNav = document.querySelector(".header__toggle");
let header = document.querySelector(".header");

toggleNav.addEventListener("click", function () {
  if (header.classList.contains("header--active")) {
    header.classList.remove("header--active");
  } else {
    header.classList.add("header--active");
  }
});

//Развернуть текст
let companyCardButton = document.querySelector(".company-card__button");
let companyCardText = document.querySelector(".company-card__text");

companyCardButton.addEventListener("click", function () {
  if (companyCardText.classList.contains("company-card__text--active")) {
    companyCardText.classList.remove("company-card__text--active");
  } else {
    companyCardText.classList.add("company-card__text--active");
  }
});



let sections = $('section');
const nav = $('.sidebar');
const promo = $(`.promo`);
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  if(cur_pos >= promo.outerHeight()) {
    nav.addClass(`sidebar--dark`);
  } else {
    nav.removeClass(`sidebar--dark`);
  }
  sections.each(function() {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      console.log(nav);
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  return false;
});
