import { flipLeft, flipRight } from "./pageFlip.js";
import scrollEffect from "./headerScrollEffect.js";
import getAndShowContents from "./showContents.js";

getAndShowContents();

document.querySelector("#flip-left").addEventListener("click", flipLeft);
document.querySelector("#flip-right").addEventListener("click", flipRight);

document
  .querySelector("#contents")
  .addEventListener("click", getAndShowContents);

window.addEventListener("scroll", scrollEffect);
