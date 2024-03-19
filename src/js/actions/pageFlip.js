/* eslint-disable import/extensions */
import getSurah from "../surahPage/getSurah.js";
import utils from "../utilities/utils.js";
import getContents from "../contentsPage/getContents.js";

function flipLeft() {
  switch (utils.currentSurah) {
    case 0:
      getSurah(114);
      utils.currentSurah = 114;
      break;
    case 1:
      getContents();
      utils.currentSurah = 0;
      break;
    default:
      getSurah(utils.currentSurah - 1);
      utils.currentSurah -= 1;
  }
}

function flipRight() {
  switch (utils.currentSurah) {
    case 0:
      getSurah(1);
      utils.currentSurah = 1;
      break;
    case 114:
      getContents();
      utils.currentSurah = 0;
      break;
    default:
      getSurah(utils.currentSurah + 1);
      utils.currentSurah += 1;
  }
}

export { flipLeft, flipRight };
