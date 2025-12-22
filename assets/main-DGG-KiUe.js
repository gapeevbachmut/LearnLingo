import{a as L}from"./vendor-BWC8OeqA.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function b(e){return`
<li class="teacher-card">
  <!-- Avatar -->
  <div class="teacher-avatar">
    <img src='${e.avatar_url}' alt="${e.name}" class="teacher-avatar-img" width="96"
      height="96" />
    <svg width="12" height="12" class="teacher-avatar-svg">
      <use href="../public/img/sprite.svg#icon-group"></use>
    </svg>
  </div>

  <!-- Main content -->
  <div class="teacher-content">
    <div class="teacher-content-top">
      <!-- Name -->
      <div class="teacher-data">
                <p class="teacher-languages">${e.languages}</p>

        <h2 class="teacher-name">
          ${e.name} ${e.surname}
        </h2>
      </div>
      <!-- Top info row -->
      <div class="teacher-meta">

        <p class="teacher-lessons-online">
                    <svg width="16" height="16" class="svg-book">
            <use href="../public/img/sprite.svg#icon-book-open"></use>
          </svg>
          Lessons online
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-lessons-done">
          Lessons done: <span>${e.lessons_done}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-rating">
          <svg width="16" height="16" class="svg-star">
            <use href="../public/img/sprite.svg#icon-star"></use>
          </svg>
          Rating: <span>${e.rating}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-price">
          Price / 1 hour: <span class="price-color">${e.price_per_hour}$</span>
        </p>
        <button class="teacher-like-btn" type="button">
          <svg width="16" height="16" class="svg-heart">
            <use href="../public/img/sprite.svg#icon-normal"></use>
          </svg>
        </button>
      </div>
    </div>

    <!-- Skills / description -->
    <div class="teacher-info">

      <p class="teacher-speaks">
        <span class="teacher-info-label">Speaks:</span>
        <span class="teacher-info-language"> ${e.languages}</span>

      </p>

      <p class="teacher-lesson-info">
        <span class="teacher-info-label">Lesson Info:</span>
${e.lesson_info}      </p>

      <p class="teacher-conditions">
        <span class="teacher-info-label">Conditions:</span>
${e.conditions}      </p>

    </div>

    <!-- Read more -->
    <button class="teacher-read-more" type="button">
      Read more
    </button>

    <!-- Levels -->
    <ul class="teacher-levels">
${e.levels.map(n=>`<li class='teacher-level'><p>#${n}</p></li>`).join("")}

    </ul>

  </div>
</li>
    `}const y="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function $(){const e=await L.get(y);return e.data?Object.values(e.data):[]}const q=document.querySelector(".teachers-list"),v=document.querySelector(".load-more-btn"),S=4;let f=1,l=[];function c(e){l=e,f=1,m()}function m(){const e=f*S,n=l.slice(0,e),a=n.map(s=>b(s)).join("");q.innerHTML=a,n.length>=l.length&&(v.style.display="none")}v.addEventListener("click",()=>{f+=1,m()});const i=document.querySelector(".language");let u=[];function T(e){u=e;const n=e.flatMap(s=>s.languages);[...new Set(n)].forEach(s=>{const t=document.createElement("option");t.value=s,t.textContent=s,i.append(t)}),i.value=""}i.addEventListener("change",e=>{const n=e.target.value;if(!n){c(u);return}const a=u.filter(s=>s.languages.includes(n));c(a)});const w=new Date;document.querySelector(".footer-date");const E=document.querySelector(".date-year");E.textContent=w.getFullYear();const p=document.querySelector(".level");let d=[];function P(e){d=e;const n=e.flatMap(s=>s.levels);[...new Set(n)].forEach(s=>{const t=document.createElement("option");t.value=s,t.textContent=s,p.append(t)}),p.value=""}p.addEventListener("change",e=>{const n=e.target.value;if(!n){c(d);return}const a=d.filter(s=>s.levels.includes(n));c(a)});const g=document.querySelector(".price");let h=[];function _(e){h=e;const n=e.map(s=>s.price_per_hour);[...new Set(n)].sort((s,t)=>s-t).forEach(s=>{const t=document.createElement("option");t.value=s,t.textContent=`${s} $`,g.append(t)}),g.value=""}g.addEventListener("change",e=>{const n=e.target.value,a=Number(n);if(!n){c(h);return}const s=h.filter(t=>t.price_per_hour===a);c(s)});async function C(){const e=await $();c(e),T(e),P(e),_(e)}C();
//# sourceMappingURL=main-DGG-KiUe.js.map
