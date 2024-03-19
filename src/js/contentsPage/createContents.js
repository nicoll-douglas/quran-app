/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import getSurah from "../surahPage/getSurah.js";
import searchFunc from "../actions/search.js";
import { generateElement } from "../utilities/generateElement.js";

export default function createContents(JSON) {
  const contentsHeader = generateElement("div", "", ["contents-header"], null);

  const contentsLabel = generateElement(
    "h2",
    "Contents",
    ["contents-label"],
    null
  );

  const search = generateElement("p", "", ["search"], {
    contenteditable: "true",
    "data-placeholder": "Search...",
  });
  search.addEventListener("keyup", searchFunc);
  search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  const listContainer = generateElement(
    "div",
    "",
    ["contents-list-container"],
    null
  );

  const listA = document.createElement("ul");
  const listB = document.createElement("ul");

  JSON.data.surahs.references.forEach((surah) => {
    const listItem = generateElement("li", "", ["contents-list-item"], null);
    const surahEnglish = generateElement(
      "p",
      `${surah.number}. ${surah.englishName} - "${surah.englishNameTranslation}"`,
      ["english-label"],
      null
    );
    const surahArabic = generateElement("p", surah.name, ["arabic-label"], {
      dir: "rtl",
    });
    listItem.appendChild(surahEnglish);
    listItem.appendChild(surahArabic);
    listItem.addEventListener("click", () => {
      getSurah(surah.number);
    });
    const selectedList = listA.childNodes.length < 57 ? listA : listB;
    selectedList.appendChild(listItem);
  });

  const contentsFooter = generateElement(
    "div",
    "Muhammad Asad's English translation of the Holy Quran",
    ["contents-footer"],
    null
  );

  const docFrag = new DocumentFragment();
  contentsHeader.appendChild(contentsLabel).parentNode.appendChild(search);
  listContainer.appendChild(listA).parentNode.appendChild(listB);
  docFrag
    .appendChild(contentsHeader)
    .parentNode.appendChild(listContainer)
    .parentNode.appendChild(contentsFooter);

  return docFrag;
}
