import getAndDisplay from "./displayContent.js";
import { flipLeft, flipRight } from "./pageFlip.js";

getAndDisplay(1);

document.querySelector("#flip-left").addEventListener("click", flipLeft);
document.querySelector("#flip-right").addEventListener("click", flipRight);
