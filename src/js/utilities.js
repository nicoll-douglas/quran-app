export default {
  currentSurah: 1,
  resetPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.querySelector("#page").innerHTML = "";
  },
};
