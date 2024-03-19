/* eslint-disable import/extensions */
import { flipLeft, flipRight } from "./actions/pageFlip.js";
import headerScrollEffect from "./actions/headerScroll.js";
import getContents from "./contentsPage/getContents.js";
import bookmark from "./actions/bookmark.js";

bookmark.checkForBookmark();
window.addEventListener("scroll", headerScrollEffect);
document.querySelector("#btn-left").addEventListener("click", flipLeft);
document.querySelector("#btn-right").addEventListener("click", flipRight);
document.querySelector("#contents").addEventListener("click", getContents);
