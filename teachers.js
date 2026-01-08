import{m as L,g as $}from"./assets/main-Bz-IQ57d.js";import{a as S}from"./assets/vendor-CJFyyV97.js";function b(e){return JSON.parse(localStorage.getItem(`favorites_${e}`))||[]}function T(e,t){localStorage.setItem(`favorites_${e}`,JSON.stringify(t))}function x(e,t){const a=b(e),s=a.indexOf(t);return s===-1?a.push(t):a.splice(s,1),T(e,a),a}function y(e,t){return b(e).includes(t)}function q(e){e.addEventListener("click",t=>{const a=t.target.closest(".teacher-like-btn");if(!a)return;const n=a.closest(".teacher-card").dataset.id,c=$();if(!c){alert("This feature is available only to authorized users!"),L({type:"login"});return}x(c.uid,n);const m=a.querySelector("use");y(c.uid,n)?m.setAttribute("href","#icon-hover"):m.setAttribute("href","#icon-normal")})}function E(e){return`
    <div class="teacher-extra is-hidden">

    <p class="extra-experience"> ${e.experience}</p>

    <h3 class="is-hidden">Reviews</h3>
    <ul class="teacher-reviews">
      ${e.reviews.map(t=>`
          <li class="review-item">
            <p class="review-title"><span class="review-name">${t.reviewer_name}</span>
            <span> <svg width="16" height="16" class="svg-star">
            <use href="#icon-star"></use>
          </svg></span>
              <span>${t.reviewer_rating.toFixed(1)}</span>

            </p>
            <p class="review-comment">${t.comment}</p>
          </li>
        `).join("")}
    </ul>
  </div>
    `}function k(e,t){const a=$(),n=a&&y(a.uid,e.id)?"#icon-hover":"#icon-normal";return`
<li  class="teacher-card"
     data-index="${t}"
     data-id="${e.id}">
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
        <button class="teacher-like-btn" type="button" >
          <svg width="16" height="16" class="svg-heart">
            <use href="${n}"></use>
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
${E(e)}
    <!-- ---------------------------------------------------------------------- -->

    <!-- Levels -->
    <ul class="teacher-levels">
${e.levels.map(c=>`<li class='teacher-level'><p>#${c}</p></li>`).join("")}

    </ul>

    <button type='button' class="trial-lesson-btn is-hidden" ${e}>Book trial lesson</button>

  </div>
</li>
    `}const o=document.querySelector(".teachers-list"),l=document.querySelector(".load-more-btn"),_=4;let f=1,i=[];function r(e){i=e,f=1,w()}function w(){const e=f*_,t=i.slice(0,e),a=t.map((s,n)=>k(s,n)).join("");o.innerHTML=a,t.length>=i.length?l.style.display="none":l.style.display="block"}q(o);l.addEventListener("click",()=>{f+=1,w()});o.addEventListener("click",e=>{F(e),P(e)});function F(e){const t=e.target.closest(".teacher-read-more");if(!t)return;const a=t.closest(".teacher-card"),s=a.querySelector(".teacher-extra"),n=a.querySelector(".trial-lesson-btn");C(a),s.classList.toggle("is-hidden")?(t.classList.remove("is-hidden"),n.classList.add("is-hidden")):(t.classList.add("is-hidden"),n.classList.remove("is-hidden"))}function P(e){const t=e.target.closest(".trial-lesson-btn");if(!t)return;const a=t.closest(".teacher-card"),s=Number(a.dataset.index),n=i[s];L({type:"trial",teacher:n})}function C(e){o.querySelectorAll(".teacher-card").forEach(t=>{t!==e&&(t.querySelector(".teacher-extra")?.classList.add("is-hidden"),t.querySelector(".trial-lesson-btn")?.classList.add("is-hidden"),t.querySelector(".teacher-read-more")?.classList.remove("is-hidden"))})}const d=document.querySelector(".language");let u=[];function B(e){u=e;const t=e.flatMap(s=>s.languages);[...new Set(t)].forEach(s=>{const n=document.createElement("option");n.value=s,n.textContent=s,d.append(n)}),d.value=""}d.addEventListener("change",e=>{const t=e.target.value;if(!t){r(u);return}const a=u.filter(s=>s.languages.includes(t));r(a)});const I="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function M(){const e=await S.get(I);return e.data?Object.entries(e.data).map(([t,a])=>({id:t,...a})):[]}const p=document.querySelector(".level");let h=[];function N(e){h=e;const t=e.flatMap(s=>s.levels);[...new Set(t)].forEach(s=>{const n=document.createElement("option");n.value=s,n.textContent=s,p.append(n)}),p.value=""}p.addEventListener("change",e=>{const t=e.target.value;if(!t){r(h);return}const a=h.filter(s=>s.levels.includes(t));r(a)});const v=document.querySelector(".price");let g=[];function R(e){g=e;const t=e.map(s=>s.price_per_hour);[...new Set(t)].sort((s,n)=>s-n).forEach(s=>{const n=document.createElement("option");n.value=s,n.textContent=`${s} $`,v.append(n)}),v.value=""}v.addEventListener("change",e=>{const t=e.target.value,a=Number(t);if(!t){r(g);return}const s=g.filter(n=>n.price_per_hour===a);r(s)});async function A(){const e=await M();r(e),B(e),N(e),R(e)}A();
//# sourceMappingURL=teachers.js.map
