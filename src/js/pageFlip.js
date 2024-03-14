import getAndDisplaySurah from "./displaySurah.js";
import data from "./data.js";
import getAndShowContents from "./showContents.js";

function flipLeft() {
  if (data.currentSurah === 0) {
    getAndDisplaySurah(114);
    data.currentSurah = 114;
  } else if (data.currentSurah === 1) {
    getAndShowContents();
    data.currentSurah = 0;
  } else {
    getAndDisplaySurah(data.currentSurah - 1);
    data.currentSurah -= 1;
  }
}

function flipRight() {
  if (data.currentSurah === 0) {
    getAndDisplaySurah(1);
    data.currentSurah = 1;
  } else if (data.currentSurah === 114) {
    getAndShowContents();
    data.currentSurah = 0;
  } else {
    getAndDisplaySurah(data.currentSurah + 1);
    data.currentSurah += 1;
  }
}

export { flipLeft, flipRight };
