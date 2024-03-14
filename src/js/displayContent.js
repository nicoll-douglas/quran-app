function displayContent(dataObject) {
  // Show surah number
  document.querySelector("#surah").textContent = dataObject.data.number;
  // Show Arabic surah title
  document.querySelector("#arabic-title").textContent =
    dataObject.data.englishName;
  // Show English surah title
  document.querySelector("#english-title").textContent =
    dataObject.data.englishNameTranslation;
  // Show ayahs
  dataObject.data.ayahs.forEach((ayah) => {
    const ayahElement = document.createElement("p");
    ayahElement.textContent = `${ayah.numberInSurah}. ${ayah.text}`;
    document.querySelector("#ayahs-container").appendChild(ayahElement);
  });
}

export default async function getAndDisplay(surahNumber) {
  try {
    const response = await fetch(
      `http://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`
    );
    const dataObject = await response.json();
    displayContent(dataObject);
  } catch (err) {
    console.log(err);
  }
}
