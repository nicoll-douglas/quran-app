import utilities from "./utilities.js";
import showSpinner from "./spinner.js";
import contentsPage from "./contentsPage.js";

function showContents(dataObject) {
  utilities.resetPage();
  const fragment = contentsPage(dataObject);
  document.querySelector("#page").append(fragment);
  utilities.currentSurah = 0;
}

export default async function getContents() {
  if (utilities.currentSurah !== 0) {
    showSpinner();
    try {
      const response = await fetch("http://api.alquran.cloud/v1/meta");
      const dataObject = await response.json();
      showContents(dataObject);
    } catch (err) {
      console.log(err);
    }
  }
}
