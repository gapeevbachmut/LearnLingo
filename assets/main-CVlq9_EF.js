import{a as d}from"./vendor-BWC8OeqA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();function u(e){return`
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
${e.levels.map(a=>`<li class='teacher-level'><p>#${a}</p></li>`).join("")}

    </ul>

  </div>
</li>
    `}const h="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function g(){const e=await d.get(h);return e.data?Object.values(e.data):[]}const f=document.querySelector(".teachers-list"),i=document.querySelector(".load-more-btn"),v=4;let l=1,c=[];async function m(){c=await g(),p()}function p(){const e=l*v,a=c.slice(0,e),r=a.map(n=>u(n)).join("");f.innerHTML=r,a.length>=c.length&&(i.style.display="none")}i.addEventListener("click",()=>{l+=1,p()});m();const y=new Date;document.querySelector(".footer-date");const b=document.querySelector(".date-year");b.textContent=y.getFullYear();
//# sourceMappingURL=main-CVlq9_EF.js.map
