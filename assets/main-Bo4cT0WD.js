import{a as h}from"./vendor-BWC8OeqA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();function f(e){return`
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
${e.levels.map(t=>`<li class='teacher-level'><p>#${t}</p></li>`).join("")}

    </ul>

  </div>
</li>
    `}const v="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function m(){const e=await h.get(v);return e.data?Object.values(e.data):[]}const y=document.querySelector(".teachers-list"),d=document.querySelector(".load-more-btn"),b=4;let p=1,c=[];function i(e){c=e,p=1,g()}function g(){const e=p*b,t=c.slice(0,e),r=t.map(a=>f(a)).join("");y.innerHTML=r,t.length>=c.length&&(d.style.display="none")}d.addEventListener("click",()=>{p+=1,g()});const l=document.querySelector(".language");let u=[];function L(e){u=e;const t=e.flatMap(a=>a.languages);[...new Set(t)].forEach(a=>{const s=document.createElement("option");s.value=a,s.textContent=a,l.append(s)}),l.value=""}l.addEventListener("change",e=>{const t=e.target.value;if(!t){i(u);return}const r=u.filter(a=>a.langusges.includes(t));i(r)});const $=new Date;document.querySelector(".footer-date");const w=document.querySelector(".date-year");w.textContent=$.getFullYear();async function S(){const e=await m();i(e),L(e)}S();
//# sourceMappingURL=main-Bo4cT0WD.js.map
