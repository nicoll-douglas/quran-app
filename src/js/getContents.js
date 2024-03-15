import getSurah from "./getSurah.js";
import data from "./data.js";

function createStructure(dataObject) {
  const contentHeading = document.createElement("div");
  contentHeading.textContent = "CONTENTS";
  contentHeading.classList.add("content-heading");

  const list1 = document.createElement("ul");
  list1.classList.add("list");

  const list2 = document.createElement("ul");
  list2.classList.add("list");

  dataObject.data.surahs.references.forEach((surah) => {
    const listItem = document.createElement("li");
    listItem.classList.add("content-list-item");
    listItem.textContent = `${surah.number}. ${surah.englishName} - ${surah.englishNameTranslation}`;
    listItem.addEventListener("click", () => {
      getSurah(surah.number);
    });
    const selectedList = list1.childNodes.length < 57 ? list1 : list2;
    selectedList.appendChild(listItem);
  });

  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.appendChild(list1).parentNode.appendChild(list2);

  const fragment = new DocumentFragment();
  fragment.appendChild(contentHeading).parentNode.appendChild(listContainer);
  return fragment;
}

function showContents(dataObject) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.querySelector("#page").innerHTML = "";

  const fragment = createStructure(dataObject);
  document.querySelector("#page").append(fragment);
  data.currentSurah = 0;
}

export default async function getContents() {
  if (data.currentSurah !== 0) {
    try {
      const response = await fetch("http://api.alquran.cloud/v1/meta");
      const dataObject = await response.json();
      showContents(dataObject);
    } catch (err) {
      console.log(err);
    }
  }
}
