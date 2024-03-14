import getAndDisplay from "./displayContent.js";
import data from "./data.js";

function flipLeft() {
  if (data.currentSurah > 1) {
    getAndDisplay(data.currentSurah - 1);
    data.currentSurah -= 1;
  }
}

function flipRight() {
  if (data.currentSurah < 114) {
    getAndDisplay(data.currentSurah + 1);
    data.currentSurah += 1;
  }
}

export { flipLeft, flipRight };
