export default function scrollEffect() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector("header").classList.add("shadow-lg");
  } else {
    document.querySelector("header").classList.remove("shadow-lg");
  }
}
