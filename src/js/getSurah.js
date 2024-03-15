import utilities from "./utilities.js";
import showSpinner from "./spinner.js";
import surahPage from "./surahPage.js";

function displaySurah(dataObject) {
  utilities.resetPage();
  const fragment = surahPage(dataObject);
  document.querySelector("#page").append(fragment);
  utilities.currentSurah = dataObject.data.number;
}

export default async function getSurah(surahNumber) {
  showSpinner();
  try {
    const response = await fetch(
      `http://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`
    );
    const dataObject = await response.json();
    displaySurah(dataObject);
  } catch (err) {
    console.log(err);
  }
}
