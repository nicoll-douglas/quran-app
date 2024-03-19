function e(e,t){t&&Object.keys(t).forEach(a=>{e.setAttribute(a,t[a])})}function t(t,a,n,r){let l=document.createElement(t);return l.textContent=a,n&&l.classList.add(...n),e(l,r),l}function a(t,a){let n=document.createElementNS("http://www.w3.org/2000/svg",t);return e(n,a),n}var n={currentSurah:0,loadDelay:250,resetPage(){window.scrollTo({top:0,behavior:"smooth"}),document.querySelector("main").innerHTML=""},handleError(){this.resetPage(),alert("Something went wrong. Please try again later.");let e=t("div","",["error-display"],null),n=a("svg",{viewBox:"0 -960 960 960"}),r=a("path",{d:"M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"});document.querySelector("main").appendChild(e).appendChild(n).appendChild(r)},showSpinner(){this.resetPage();let e=t("div","",["spinner"],null);document.querySelector("main").appendChild(e)}};function r(){let e=document.querySelector(".search").textContent.trim(),t=RegExp(`${e}`,"i");document.querySelectorAll(".english-label").forEach(e=>{e.textContent.match(t)?e.parentElement.classList.remove("hidden"):e.parentElement.classList.add("hidden")})}function l(e){n.resetPage();let a=function(e){let a=t("div","",["contents-header"],null),n=t("h2","Contents",["contents-label"],null),l=t("p","",["search"],{contenteditable:"true","data-placeholder":"Search..."});l.addEventListener("keyup",r),l.addEventListener("keypress",e=>{"Enter"===e.key&&e.preventDefault()});let d=t("div","",["contents-list-container"],null),o=document.createElement("ul"),i=document.createElement("ul");e.data.surahs.references.forEach(e=>{let a=t("li","",["contents-list-item"],null),n=t("p",`${e.number}. ${e.englishName} - "${e.englishNameTranslation}"`,["english-label"],null),r=t("p",e.name,["arabic-label"],{dir:"rtl"});a.appendChild(n),a.appendChild(r),a.addEventListener("click",()=>{s(e.number)}),(o.childNodes.length<57?o:i).appendChild(a)});let c=t("div","Muhammad Asad's English translation of the Holy Quran",["contents-footer"],null),u=new DocumentFragment;return a.appendChild(n).parentNode.appendChild(l),d.appendChild(o).parentNode.appendChild(i),u.appendChild(a).parentNode.appendChild(d).parentNode.appendChild(c),u}(e);document.querySelector("main").append(a),n.currentSurah=0}async function d(){n.showSpinner();try{let e=await fetch("https://api.alquran.cloud/v1/meta"),t=await e.json();setTimeout(l,n.loadDelay,t)}catch(e){n.handleError()}}var o={added:void 0,handleLeave(e){e.id!==this.added&&e.classList.add("invisible")},handleEnter(e){e.id!==this.added&&e.classList.remove("invisible")},toggle(e){switch(this.added){case e.id:this.added=null,localStorage.clear();break;case null:this.added=e.id,this.storeBookmark();break;default:document.querySelector(`#${e.id}`).classList.remove("invisible"),this.added=e.id,this.storeBookmark()}},storeBookmark(){localStorage.setItem("storage.surah",n.currentSurah),localStorage.setItem("storage.bookmark",this.added)},checkForBookmark(){let e=localStorage.getItem("storage.surah");e?s(e).then(()=>{setTimeout(()=>{let e=localStorage.getItem("storage.bookmark"),t=document.querySelector(`#${e}`);t&&(this.added=document.querySelector(`#${e}`).id,t.classList.remove("invisible"),t.scrollIntoView({behavior:"smooth",block:"center"}))},n.loadDelay)}):d()}};function i(e,a){n.resetPage();let r=function(e,a){let n=t("div","",["headings-container"],null),r=t("div",e.data.number,["surah-number"],null),l=t("div","",["headings"],null),d=t("div",e.data.englishName,["surah-english-name"],null),i=t("div",a.data.name,["surah-name"],{dir:"rtl"}),s=t("div",e.data.englishNameTranslation,["surah-english-name-translation"],null),c=t("div","",["text"],null),u=e.data.ayahs,h=a.data.ayahs;for(let e=0;e<u.length;e+=1){let a=t("img","",["bookmark","invisible"],{src:"./dist/bookmark.png",id:`b-${u[e].numberInSurah}`});a.addEventListener("click",()=>{o.toggle(a)});let n=t("div","",["ayah-container"],null);n.addEventListener("mouseenter",()=>{o.handleEnter(a)}),n.addEventListener("mouseleave",()=>{o.handleLeave(a)});let r=t("div","",["ayah-content"],null),l=t("p",`${u[e].numberInSurah}. ${u[e].text}`,["ayah-english"],null),d=t("p",h[e].text,["ayah-arabic"],null);c.appendChild(n).appendChild(a).parentNode.appendChild(r).appendChild(l).parentNode.appendChild(d)}let p=new DocumentFragment;return l.appendChild(d).parentNode.appendChild(i).parentNode.appendChild(s),n.appendChild(r).parentNode.appendChild(l),p.appendChild(n).parentNode.appendChild(c),p}(e,a);document.querySelector("main").append(r),n.currentSurah=e.data.number}async function s(e){n.showSpinner();try{let t=await fetch(`https://api.alquran.cloud/v1/surah/${e}/en.asad`),a=await t.json(),r=await fetch(`https://api.alquran.cloud/v1/surah/${e}`),l=await r.json();setTimeout(i,n.loadDelay,a,l)}catch(e){n.handleError()}}o.checkForBookmark(),window.addEventListener("scroll",function(){document.body.scrollTop>0||document.documentElement.scrollTop>0?document.querySelector("header").classList.add("shadow-lg"):document.querySelector("header").classList.remove("shadow-lg")}),document.querySelector("#btn-left").addEventListener("click",function(){switch(n.currentSurah){case 0:s(114),n.currentSurah=114;break;case 1:d(),n.currentSurah=0;break;default:s(n.currentSurah-1),n.currentSurah-=1}}),document.querySelector("#btn-right").addEventListener("click",function(){switch(n.currentSurah){case 0:s(1),n.currentSurah=1;break;case 114:d(),n.currentSurah=0;break;default:s(n.currentSurah+1),n.currentSurah+=1}}),document.querySelector("#contents").addEventListener("click",d);
//# sourceMappingURL=index.a8653b65.js.map