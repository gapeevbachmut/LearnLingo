import{m,g as L}from"./assets/main-DEzb_023.js";import{a as y}from"./assets/vendor-CJFyyV97.js";function $(e){return JSON.parse(localStorage.getItem(`favorites_${e}`))||[]}function S(e,s){localStorage.setItem(`favorites_${e}`,JSON.stringify(s))}function w(e,s){const a=$(e),t=a.indexOf(s);return t===-1?a.push(s):a.splice(t,1),S(e,a),a}function x(e,s){return $(e).includes(s)}function T(e){e.addEventListener("click",s=>{const a=s.target.closest(".teacher-like-btn");if(!a)return;const n=a.closest(".teacher-card").dataset.id,o=L();if(!o){m({type:"login"});return}w(o.uid,n),a.classList.toggle("is-favorite")})}function q(e){return`
    <div class="teacher-extra is-hidden">

    <p class="extra-experience"> ${e.experience}</p>

    <h3 class="is-hidden">Reviews</h3>
    <ul class="teacher-reviews">
      ${e.reviews.map(s=>`
          <li class="review-item">
            <p class="review-title"><span class="review-name">${s.reviewer_name}</span>
            <span> <svg width="16" height="16" class="svg-star">
            <use href="#icon-star"></use>
          </svg></span>
              <span>${s.reviewer_rating.toFixed(1)}</span>

            </p>
            <p class="review-comment">${s.comment}</p>
          </li>
        `).join("")}
    </ul>
  </div>
    `}function E(e,s){const a=L(),t=a&&x(a.uid,e.id)?"is-favorite":"";return`
<li class="teacher-card" data-index="${s}" data-id="${e.id}">
  <!-- Avatar -->
  <div class="teacher-avatar">
    <img src='${e.avatar_url||"../img/main-content/default-avatar.png"} '
     alt="${e.name||"Teacher"} " class="teacher-avatar-img" width="96"
      height="96" />
    <svg width="12" height="12" class="teacher-avatar-svg">
      <use href="#icon-group"></use>
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
            <use href="#icon-book-open"></use>
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
            <use href="#icon-star"></use>
          </svg>
          Rating: <span>${e.rating}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-price">
          Price / 1 hour: <span class="price-color">${e.price_per_hour}$</span>
        </p>
        <button class="teacher-like-btn ${t}" type="button" >
          <svg width="16" height="16" class="svg-heart">
            <use href="#icon-normal"></use>
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
    <!-- ---------------------   teacher-extra   ------------------------------ -->
${q(e)}
    <!-- ---------------------------------------------------------------------- -->

    <!-- Levels -->
    <ul class="teacher-levels">
${e.levels.map(n=>`<li class='teacher-level'><p>#${n}</p></li>`).join("")}

    </ul>

    <button type='button' class="trial-lesson-btn is-hidden" ${e}>Book trial lesson</button>

  </div>
</li>
    `}const i=document.querySelector(".teachers-list"),l=document.querySelector(".load-more-btn"),k=4;let f=1,c=[];function r(e){c=e,f=1,b()}function b(){const e=f*k,s=c.slice(0,e),a=s.map((t,n)=>E(t,n)).join("");i.innerHTML=a,s.length>=c.length?l.style.display="none":l.style.display="block"}T(i);l.addEventListener("click",()=>{f+=1,b()});i.addEventListener("click",e=>{_(e),F(e)});function _(e){const s=e.target.closest(".teacher-read-more");if(!s)return;const a=s.closest(".teacher-card"),t=a.querySelector(".teacher-extra"),n=a.querySelector(".trial-lesson-btn");P(a),t.classList.toggle("is-hidden")?(s.classList.remove("is-hidden"),n.classList.add("is-hidden")):(s.classList.add("is-hidden"),n.classList.remove("is-hidden"))}function F(e){const s=e.target.closest(".trial-lesson-btn");if(!s)return;const a=s.closest(".teacher-card"),t=Number(a.dataset.index),n=c[t];m({type:"trial",teacher:n})}function P(e){i.querySelectorAll(".teacher-card").forEach(s=>{s!==e&&(s.querySelector(".teacher-extra")?.classList.add("is-hidden"),s.querySelector(".trial-lesson-btn")?.classList.add("is-hidden"),s.querySelector(".teacher-read-more")?.classList.remove("is-hidden"))})}const d=document.querySelector(".language");let u=[];function C(e){u=e;const s=e.flatMap(t=>t.languages);[...new Set(s)].forEach(t=>{const n=document.createElement("option");n.value=t,n.textContent=t,d.append(n)}),d.value=""}d.addEventListener("change",e=>{const s=e.target.value;if(!s){r(u);return}const a=u.filter(t=>t.languages.includes(s));r(a)});const B="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function M(){const e=await y.get(B);return e.data?Object.entries(e.data).map(([s,a])=>({id:s,...a})):[]}const p=document.querySelector(".level");let h=[];function R(e){h=e;const s=e.flatMap(t=>t.levels);[...new Set(s)].forEach(t=>{const n=document.createElement("option");n.value=t,n.textContent=t,p.append(n)}),p.value=""}p.addEventListener("change",e=>{const s=e.target.value;if(!s){r(h);return}const a=h.filter(t=>t.levels.includes(s));r(a)});const g=document.querySelector(".price");let v=[];function j(e){v=e;const s=e.map(t=>t.price_per_hour);[...new Set(s)].sort((t,n)=>t-n).forEach(t=>{const n=document.createElement("option");n.value=t,n.textContent=`${t} $`,g.append(n)}),g.value=""}g.addEventListener("change",e=>{const s=e.target.value,a=Number(s);if(!s){r(v);return}const t=v.filter(n=>n.price_per_hour===a);r(t)});async function N(){const e=await M();r(e),C(e),R(e),j(e)}N();
//# sourceMappingURL=teachers.js.map
