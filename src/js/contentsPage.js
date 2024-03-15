import getSurah from "./getSurah.js";

export default function contentsPage(dataObject) {
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
