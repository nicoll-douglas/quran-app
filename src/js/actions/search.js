export default function searchFunc() {
  const text = document.querySelector(".search").textContent.trim();
  const regex = new RegExp(`${text}`, "i");
  document.querySelectorAll(".english-label").forEach((element) => {
    if (!element.textContent.match(regex)) {
      element.parentElement.classList.add("hidden");
    } else {
      element.parentElement.classList.remove("hidden");
    }
  });
}
