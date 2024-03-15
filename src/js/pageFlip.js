import getSurah from "./getSurah.js";
import utilities from "./utilities.js";
import getContents from "./getContents.js";

function flipLeft() {
  if (utilities.currentSurah === 0) {
    getSurah(114);
    utilities.currentSurah = 114;
  } else if (utilities.currentSurah === 1) {
    getContents();
    utilities.currentSurah = 0;
  } else {
    getSurah(utilities.currentSurah - 1);
    utilities.currentSurah -= 1;
  }
}

function flipRight() {
  if (utilities.currentSurah === 0) {
    getSurah(1);
    utilities.currentSurah = 1;
  } else if (utilities.currentSurah === 114) {
    getContents();
    utilities.currentSurah = 0;
  } else {
    getSurah(utilities.currentSurah + 1);
    utilities.currentSurah += 1;
  }
}

export { flipLeft, flipRight };
