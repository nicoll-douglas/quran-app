export default function showSpinner() {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  document.querySelector("#page").appendChild(loader);
}
