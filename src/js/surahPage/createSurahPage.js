/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import bookmark from "../actions/bookmark.js";
import { generateElement } from "../utilities/generateElement.js";

export default function createSurahPage(JSON1, JSON2) {
  const headingsContainer = generateElement(
    "div",
    "",
    ["headings-container"],
    null
  );

  const surahNumber = generateElement(
    "div",
    JSON1.data.number,
    ["surah-number"],
    null
  );

  const headings = generateElement("div", "", ["headings"], null);

  const englishName = generateElement(
    "div",
    JSON1.data.englishName,
    ["surah-english-name"],
    null
  );

  const name = generateElement("div", JSON2.data.name, ["surah-name"], {
    dir: "rtl",
  });

  const englishNameTranslation = generateElement(
    "div",
    JSON1.data.englishNameTranslation,
    ["surah-english-name-translation"],
    null
  );

  const text = generateElement("div", "", ["text"], null);

  const ayahsEnglish = JSON1.data.ayahs;
  const ayahsArabic = JSON2.data.ayahs;
  for (let i = 0; i < ayahsEnglish.length; i += 1) {
    const marker = generateElement("img", "", ["bookmark", "invisible"], {
      src: "./assets/bookmark.png",
      id: `b-${ayahsEnglish[i].numberInSurah}`,
    });
    marker.addEventListener("click", () => {
      bookmark.toggle(marker);
    });

    const container = generateElement("div", "", ["ayah-container"], null);
    container.addEventListener("mouseenter", () => {
      bookmark.handleEnter(marker);
    });
    container.addEventListener("mouseleave", () => {
      bookmark.handleLeave(marker);
    });

    const content = generateElement("div", "", ["ayah-content"], null);
    const ayahEnglish = generateElement(
      "p",
      `${ayahsEnglish[i].numberInSurah}. ${ayahsEnglish[i].text}`,
      ["ayah-english"],
      null
    );

    const ayahArabic = generateElement(
      "p",
      ayahsArabic[i].text,
      ["ayah-arabic"],
      null
    );

    text
      .appendChild(container)
      .appendChild(marker)
      .parentNode.appendChild(content)
      .appendChild(ayahEnglish)
      .parentNode.appendChild(ayahArabic);
  }

  const docFrag = new DocumentFragment();
  headings
    .appendChild(englishName)
    .parentNode.appendChild(name)
    .parentNode.appendChild(englishNameTranslation);
  headingsContainer.appendChild(surahNumber).parentNode.appendChild(headings);
  docFrag.appendChild(headingsContainer).parentNode.appendChild(text);

  return docFrag;
}
