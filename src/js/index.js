import getAndDisplay from "./displayContent.js";
import { flipLeft, flipRight } from "./pageFlip.js";
import scrollEffect from "./headerScrollEffect.js";

// getAndDisplay(1);
fetch("http://api.alquran.cloud/v1/meta")
  .then((response) => response.json())
  .then((data) => console.log(data));

document.querySelector("#flip-left").addEventListener("click", flipLeft);
document.querySelector("#flip-right").addEventListener("click", flipRight);

window.addEventListener("scroll", scrollEffect);
