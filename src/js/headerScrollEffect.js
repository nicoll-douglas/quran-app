const header = document.querySelector("header");

export default function scrollEffect() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
}
