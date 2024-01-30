import{S as a,i as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const l=document.querySelector(".gallery"),d=document.querySelector(".form"),c=document.querySelector(".loader");function m(t){const o="https://pixabay.com",s="/api/",n=new URLSearchParams({key:"42078504-06c0bc861c70afe486d8727f6",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${o}${s}?${n}`;return fetch(r).then(e=>{if(e.ok)return e.json();throw new Error("ERROR")}).then(e=>{const i=e.hits;if(i.length>0)return i;u.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{console.log(e)})}d.addEventListener("submit",f);function f(t){t.preventDefault(),c.classList.remove("is-hidden");const o=t.target.elements.imageDesc.value;l.innerHTML="",m(o).then(s=>g(s)).catch(s=>{console.log(s)}).finally(()=>{c.classList.add("is-hidden")})}function p(t){return`<li class="gallery__item">
   <a class="gallery__link" href="${t.largeImageURL}">
    <img class="gallery__image" src=${t.webformatURL} alt=${t.tags}/> 
    <ul class="description-list">
            <li class="description-item">Lickes: ${t.likes}</li>
            <li class="description-item">Views: ${t.views}</li>
            <li class="description-item">Comments: ${t.comments}</li>
            <li class="description-item">Downloads: ${t.downloads}</li>
    </ul>
    </a>
  </li>`}function h(t){return t.map(p).join("")}function g(t){const o=h(t);l.insertAdjacentHTML("beforeend",o),y.refresh()}const y=new a(".gallery a",{captionDelay:"250"});
//# sourceMappingURL=commonHelpers.js.map
