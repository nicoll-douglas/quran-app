import data from "./data.js";

function displaySurah(dataObject) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // Show surah number
  document.querySelector("#surah").textContent = dataObject.data.number;
  // Show Arabic surah title
  document.querySelector("#arabic-title").textContent =
    dataObject.data.englishName;
  // Show English surah title
  document.querySelector("#english-title").textContent =
    `"${dataObject.data.englishNameTranslation}"`;
  // Show ayahs
  document.querySelector("#container").innerHTML = "";
  dataObject.data.ayahs.forEach((ayah) => {
    const ayahElement = document.createElement("p");
    ayahElement.textContent = `${ayah.numberInSurah}. ${ayah.text}`;
    document.querySelector("#container").appendChild(ayahElement);
  });
  data.currentSurah = dataObject.data.number;
}

export default async function getAndDisplaySurah(surahNumber) {
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
