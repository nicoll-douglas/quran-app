/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import utils from "../utilities/utils.js";
import createContents from "./createContents.js";

function renderContents(JSON) {
  utils.resetPage();
  const docFrag = createContents(JSON);
  document.querySelector("main").append(docFrag);
  utils.currentSurah = 0;
}

export default async function getContents() {
  utils.showSpinner();
  try {
    const response = await fetch("http://api.alquran.cloud/v1/meta");
    const dataObject = await response.json();
    setTimeout(renderContents, utils.loadDelay, dataObject);
  } catch (err) {
    utils.handleError();
  }
}
