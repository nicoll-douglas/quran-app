/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import utils from "../utilities/utils.js";
import createSurahPage from "./createSurahPage.js";

function renderSurahPage(JSON1, JSON2) {
  utils.resetPage();
  const docFrag = createSurahPage(JSON1, JSON2);
  document.querySelector("main").append(docFrag);
  utils.currentSurah = JSON1.data.number;
}

export default async function getSurah(surahNumber) {
  utils.showSpinner();
  try {
    const response1 = await fetch(
      `http://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`
    );
    const JSON1 = await response1.json();
    const response2 = await fetch(
      `http://api.alquran.cloud/v1/surah/${surahNumber}`
    );
    const JSON2 = await response2.json();
    setTimeout(renderSurahPage, utils.loadDelay, JSON1, JSON2);
  } catch (err) {
    utils.handleError();
  }
}
