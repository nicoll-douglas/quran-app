export default function surahPage(dataObject) {
  const englishTitle = document.createElement("div");
  englishTitle.classList.add("english-title");
  englishTitle.textContent = `"${dataObject.data.englishNameTranslation}"`;

  const arabicTitle = document.createElement("div");
  arabicTitle.classList.add("arabic-title");
  arabicTitle.textContent = dataObject.data.englishName;

  const titlesContainer = document.createElement("div");
  titlesContainer.classList.add("titles-container");
  titlesContainer.appendChild(arabicTitle).parentNode.appendChild(englishTitle);

  const surahNumber = document.createElement("div");
  surahNumber.classList.add("surah-number");
  surahNumber.textContent = dataObject.data.number;

  const headingContainer = document.createElement("div");
  headingContainer.classList.add("heading-container");
  headingContainer
    .appendChild(surahNumber)
    .parentNode.appendChild(titlesContainer);

  const textContainer = document.createElement("div");
  textContainer.classList.add("container");

  dataObject.data.ayahs.forEach((ayah) => {
    const elem = document.createElement("p");
    elem.textContent = `${ayah.numberInSurah}. ${ayah.text}`;
    textContainer.appendChild(elem);
  });

  const fragment = new DocumentFragment();
  fragment.appendChild(headingContainer).parentNode.appendChild(textContainer);
  return fragment;
}
