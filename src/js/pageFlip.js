import getSurah from "./getSurah.js";
import data from "./data.js";
import getContents from "./getContents.js";

function flipLeft() {
  if (data.currentSurah === 0) {
    getSurah(114);
    data.currentSurah = 114;
  } else if (data.currentSurah === 1) {
    getContents();
    data.currentSurah = 0;
  } else {
    getSurah(data.currentSurah - 1);
    data.currentSurah -= 1;
  }
}

function flipRight() {
  if (data.currentSurah === 0) {
    getSurah(1);
    data.currentSurah = 1;
  } else if (data.currentSurah === 114) {
    getContents();
    data.currentSurah = 0;
  } else {
    getSurah(data.currentSurah + 1);
    data.currentSurah += 1;
  }
}

export { flipLeft, flipRight };
