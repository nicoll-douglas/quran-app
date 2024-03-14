import getAndDisplaySurah from "./displaySurah.js";
import data from "./data.js";

function showContents(dataObject) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // clear page content if any
  document.querySelector("#surah").textContent = "";
  document.querySelector("#arabic-title").textContent = "";
  document.querySelector("#english-title").textContent = "";
  const container = document.querySelector("#container");
  container.innerHTML = "";

  const label = document.createElement("div");
  label.textContent = "CONTENTS";
  label.classList.add("mb-2");

  const lists = document.createElement("div");
  lists.classList.add("flex");

  const list1 = document.createElement("ul");
  list1.classList.add("flex-1", "flex", "flex-col");

  const list2 = document.createElement("ul");
  list2.classList.add("flex-1", "flex", "flex-col");

  const array = dataObject.data.surahs.references;
  array.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("text-sm", "cursor-pointer", "hover:underline");
    span.addEventListener("click", () => {
      getAndDisplaySurah(element.number);
    });
    span.textContent = `${element.number}. ${element.englishName} - ${element.englishNameTranslation}`;
    // 57 items for first list of contents, 57 items for second list
    if (list1.childNodes.length < 57) {
      list1.appendChild(span);
    } else {
      list2.appendChild(span);
    }
  });

  const fragment = new DocumentFragment();
  fragment.appendChild(label);
  lists.appendChild(list1).parentNode.appendChild(list2);
  fragment.appendChild(lists);
  container.append(fragment);

  data.currentSurah = 0;
}

export default async function getAndShowContents() {
  try {
    const response = await fetch("http://api.alquran.cloud/v1/meta");
    const dataObject = await response.json();
    showContents(dataObject);
  } catch (err) {
    console.log(err);
  }
}
