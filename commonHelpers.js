import{i as c,S as L,a as b}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const S=document.querySelector(".search-form"),m=document.querySelector(".gallery-list"),l=document.querySelector(".js-more-btn"),d=document.querySelector(".js-loader");let n=1,u=null;function p(){const e="https://pixabay.com/api/",t={key:"42111454-a6064c7507ecd0abc8356168a",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:n};return b.get(e,{params:t}).then(i=>i.data)}S.addEventListener("submit",q);async function q(e){if(e.preventDefault(),u=e.target.elements.query.value,n=1,u===""){c.error({position:"topRight",message:"Enter a word to search for"});return}try{const t=await p();if(t.totalHits===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}n===1&&(h(),m.innerHTML="",f(t.hits),g(t.totalHits),y()),e.target.elements.query.value=""}catch(t){console.log(`Error: ${t}`)}}function v({largeImageURL:e,webformatURL:t,tags:i,likes:a,views:r,comments:o,downloads:s}){return` <li class="picture-card">
<a class="gallary-card-link" href="${e}">
  <img src="${t}" alt="${i}" />
  <ul class="image-info">
    <li class="image-item-info">
      <p>Likes</p>
      <p>${a}</p>
    </li>
    <li class="image-item-info">
      <p>Views</p>
      <p>${r}</p>
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
</li>`}function w(e){return e.map(v).join("")}function f(e){const t=w(e);m.insertAdjacentHTML("beforeend",t),E.refresh()}l.addEventListener("click",$);async function $(){n+=1,h();const e=await p();f(e.hits),g(e.totalHits),y()}function g(e){const t=Math.ceil(e/40);n>=t?(c.info({position:"topRight",message:"We're sorry, there are no more posts to load"}),l.classList.add("is-hidden")):l.classList.remove("is-hidden")}function h(){d.classList.remove("is-hidden")}function y(){d.classList.add("is-hidden")}const E=new L(".gallery-list a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
