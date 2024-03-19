/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import utils from "../utilities/utils.js";
import getContents from "../contentsPage/getContents.js";
import getSurah from "../surahPage/getSurah.js";

export default {
  added: undefined,
  handleLeave(element) {
    if (element.id !== this.added) {
      element.classList.add("invisible");
    }
  },
  handleEnter(element) {
    if (element.id !== this.added) {
      element.classList.remove("invisible");
    }
  },
  toggle(element) {
    switch (this.added) {
      case element.id:
        this.added = null;
        localStorage.clear();
        break;
      case undefined || null:
        this.added = element.id;
        this.storeBookmark();
        break;
      default:
        document.querySelector(`#${element.id}`).classList.remove("invisible");
        this.added = element.id;
        this.storeBookmark();
    }
  },
  storeBookmark() {
    localStorage.setItem("storage.surah", utils.currentSurah);
    localStorage.setItem("storage.bookmark", this.added);
  },
  checkForBookmark() {
    const surah = localStorage.getItem("storage.surah");
    if (surah) {
      getSurah(surah).then(() => {
        setTimeout(() => {
          const bookmarkID = localStorage.getItem("storage.bookmark");
          const bookmark = document.querySelector(`#${bookmarkID}`);
          if (bookmark) {
            this.added = document.querySelector(`#${bookmarkID}`).id;
            bookmark.classList.remove("invisible");
            bookmark.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, utils.loadDelay);
      });
    } else {
      getContents();
    }
  },
};
