const SURAH = document.querySelector("#surah");
const ARABIC_TITLE = document.querySelector("#arabic-title");
const ENGLISH_TITLE = document.querySelector("#english-title");
const AYAHS_CONTAINER = document.querySelector("#ayahs-container");

function displayContent(dataObject) {
  SURAH.textContent = dataObject.data.number;
  ARABIC_TITLE.textContent = dataObject.data.englishName;
  ENGLISH_TITLE.textContent = dataObject.data.englishNameTranslation;
  dataObject.data.ayahs.forEach((ayah) => {
    const ayahElement = document.createElement("p");
    ayahElement.textContent = `${ayah.numberInSurah}. ${ayah.text}`;
    AYAHS_CONTAINER.appendChild(ayahElement);
  });
}

// note: can successfully update display for each surah by changing surah number in the URL
fetch("http://api.alquran.cloud/v1/surah/56/en.asad")
  .then((response) => response.json())
  .then((dataObject) => {
    try {
      displayContent(dataObject);
    } catch (err) {
      console.log(err);
    } finally {
      console.log(dataObject);
    }
  });
