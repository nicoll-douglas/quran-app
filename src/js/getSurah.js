import data from "./data.js";
import showSpinner from "./spinner.js";
import surahPage from "./surahPage.js";

function displaySurah(dataObject) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.querySelector("#page").innerHTML = "";

  const fragment = surahPage(dataObject);
  document.querySelector("#page").append(fragment);
  data.currentSurah = dataObject.data.number;
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
