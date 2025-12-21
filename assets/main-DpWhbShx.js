import{a as v}from"./vendor-BWC8OeqA.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function m(e){return`
<li class="teacher-card">
  <!-- Avatar -->
  <div class="teacher-avatar">
    <img src='${e.avatar_url}' alt="${e.name}" class="teacher-avatar-img" width="96"
      height="96" />
    <svg width="12" height="12" class="teacher-avatar-svg">
      <use href="/img/sprite.svg#icon-group"></use>
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
            <use href="/img/book-open.svg"></use>
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
            <use href="/img/sprite.svg#icon-star"></use>
          </svg>
          Rating: <span>${e.rating}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-price">
          Price / 1 hour: <span class="price-color">${e.price_per_hour}$</span>
        </p>
        <button class="teacher-like-btn" type="button">
          <svg width="16" height="16" class="svg-heart">
            <use href="/img/sprite.svg#icon-normal"></use>
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
${e.levels.map(s=>`<li class='teacher-level'><p>#${s}</p></li>`).join("")}

    </ul>

  </div>
</li>
    `}const L="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function y(){const e=await v.get(L);return e.data?Object.values(e.data):[]}const b=document.querySelector(".teachers-list"),h=document.querySelector(".load-more-btn"),$=4;let g=1,l=[];function o(e){l=e,g=1,f()}function f(){const e=g*$,s=l.slice(0,e),r=s.map(a=>m(a)).join("");b.innerHTML=r,s.length>=l.length&&(h.style.display="none")}h.addEventListener("click",()=>{g+=1,f()});const i=document.querySelector(".language");let u=[];function w(e){u=e;const s=e.flatMap(a=>a.languages);[...new Set(s)].forEach(a=>{const t=document.createElement("option");t.value=a,t.textContent=a,i.append(t)}),i.value=""}i.addEventListener("change",e=>{const s=e.target.value;if(!s){o(u);return}const r=u.filter(a=>a.languages.includes(s));o(r)});const S=new Date;document.querySelector(".footer-date");const T=document.querySelector(".date-year");T.textContent=S.getFullYear();const p=document.querySelector(".level");let d=[];function q(e){d=e;const s=e.flatMap(a=>a.levels);[...new Set(s)].forEach(a=>{const t=document.createElement("option");t.value=a,t.textContent=a,p.append(t)}),p.value=""}p.addEventListener("change",e=>{const s=e.target.value;if(!s){o(d);return}const r=d.filter(a=>a.levels.includes(s));o(r)});async function E(){const e=await y();o(e),w(e),q(e)}E();
//# sourceMappingURL=main-DpWhbShx.js.map
