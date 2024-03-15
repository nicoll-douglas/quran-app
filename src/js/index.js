import { flipLeft, flipRight } from "./pageFlip.js";
import headerScrollEffect from "./headerScrollEffect.js";
import getContents from "./getContents.js";

// getContents();

document.querySelector("#flip-left").addEventListener("click", flipLeft);
document.querySelector("#flip-right").addEventListener("click", flipRight);

document.querySelector("#contents").addEventListener("click", getContents);

window.addEventListener("scroll", headerScrollEffect);
