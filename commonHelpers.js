import{i as c,S as L,a as b}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const S=document.querySelector(".search-form"),d=document.querySelector(".gallery"),l=document.querySelector(".js-more-btn"),m=document.querySelector(".js-loader");let n=1,u=null;function p(){const r="https://pixabay.com/api/",e={key:"42111454-a6064c7507ecd0abc8356168a",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:n};return b.get(r,{params:e}).then(i=>i.data)}S.addEventListener("submit",q);async function q(r){if(r.preventDefault(),u=r.target.elements.query.value,n=1,u===""){c.error({position:"topRight",message:"Enter a word to search for"});return}try{const e=await p();if(e.totalHits===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}n===1&&(h(),d.innerHTML="",f(e.hits),g(e.totalHits),y())}catch(e){console.log(`Error: ${e}`)}}function v({largeImageURL:r,webformatURL:e,tags:i,likes:a,views:t,comments:o,downloads:s}){return` <li class="picture-card">
<a class="gallary-card-link" href="${r}">
  <img src="${e}" alt="${i}" />
  <ul class="image-info">
    <li class="image-item-info">
      <p>Likes</p>
      <p>${a}</p>
    </li>
    <li class="image-item-info">
      <p>Views</p>
      <p>${t}</p>
    </li>
    <li class="image-item-info">
      <p>Comments</p>
      <p>${o}</p>
    </li>
    <li class="image-item-info">
      <p>Downloads</p>
      <p>${s}</p>
    </li>
  </ul>
</a>
</li>`}function w(r){return r.map(v).join("")}function f(r){const e=w(r);d.insertAdjacentHTML("beforeend",e),E.refresh()}l.addEventListener("click",$);async function $(){n+=1,h();const r=await p();f(r.hits),g(r.totalHits),y()}function g(r){const e=Math.ceil(r/40);n>=e?(c.info({position:"topRight",message:"We're sorry, there are no more posts to load"}),l.classList.add("is-hidden")):l.classList.remove("is-hidden")}function h(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}const E=new L(".pictures-list a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
