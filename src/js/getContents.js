import data from "./data.js";
import showSpinner from "./spinner.js";
import contentsPage from "./contentsPage.js";

function showContents(dataObject) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.querySelector("#page").innerHTML = "";

  const fragment = contentsPage(dataObject);
  document.querySelector("#page").append(fragment);
  data.currentSurah = 0;
}

export default async function getContents() {
  if (data.currentSurah !== 0) {
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
