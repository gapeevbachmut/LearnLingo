import{m}from"./assets/main-BO4joCab.js";import{a as L}from"./assets/vendor-CJFyyV97.js";function $(e){return`
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
    `}function b(e,s){return`
<li class="teacher-card" data-index="${s}">
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
        <button class="teacher-like-btn" type="button">
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
${$(e)}
    <!-- ---------------------------------------------------------------------- -->

    <!-- Levels -->
    <ul class="teacher-levels">
${e.levels.map(n=>`<li class='teacher-level'><p>#${n}</p></li>`).join("")}

    </ul>

    <button type='button' class="trial-lesson-btn is-hidden" ${e}>Book trial lesson</button>

  </div>
</li>
    `}const v=document.querySelector(".teachers-list"),l=document.querySelector(".load-more-btn"),y=4;let g=1,c=[];function r(e){c=e,g=1,f()}function f(){const e=g*y,s=c.slice(0,e),n=s.map((t,a)=>b(t,a)).join("");v.innerHTML=n,s.length>=c.length?l.style.display="none":l.style.display="block"}l.addEventListener("click",()=>{g+=1,f()});v.addEventListener("click",e=>{w(e),T(e)});function w(e){const s=e.target.closest(".teacher-read-more");if(!s)return;const n=s.closest(".teacher-card"),t=n.querySelector(".teacher-extra"),a=n.querySelector(".trial-lesson-btn");q(n),t.classList.toggle("is-hidden")?(s.classList.remove("is-hidden"),a.classList.add("is-hidden")):(s.classList.add("is-hidden"),a.classList.remove("is-hidden"))}function T(e){const s=e.target.closest(".trial-lesson-btn");if(!s)return;const n=s.closest(".teacher-card"),t=Number(n.dataset.index),a=c[t];m({type:"trial",teacher:a})}function q(e){v.querySelectorAll(".teacher-card").forEach(s=>{s!==e&&(s.querySelector(".teacher-extra")?.classList.add("is-hidden"),s.querySelector(".trial-lesson-btn")?.classList.add("is-hidden"),s.querySelector(".teacher-read-more")?.classList.remove("is-hidden"))})}const i=document.querySelector(".language");let o=[];function x(e){o=e;const s=e.flatMap(t=>t.languages);[...new Set(s)].forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=t,i.append(a)}),i.value=""}i.addEventListener("change",e=>{const s=e.target.value;if(!s){r(o);return}const n=o.filter(t=>t.languages.includes(s));r(n)});const S="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function E(){const e=await L.get(S);return e.data?Object.values(e.data):[]}const d=document.querySelector(".level");let u=[];function k(e){u=e;const s=e.flatMap(t=>t.levels);[...new Set(s)].forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=t,d.append(a)}),d.value=""}d.addEventListener("change",e=>{const s=e.target.value;if(!s){r(u);return}const n=u.filter(t=>t.levels.includes(s));r(n)});const p=document.querySelector(".price");let h=[];function _(e){h=e;const s=e.map(t=>t.price_per_hour);[...new Set(s)].sort((t,a)=>t-a).forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=`${t} $`,p.append(a)}),p.value=""}p.addEventListener("change",e=>{const s=e.target.value,n=Number(s);if(!s){r(h);return}const t=h.filter(a=>a.price_per_hour===n);r(t)});async function P(){const e=await E();r(e),x(e),k(e),_(e)}P();
//# sourceMappingURL=teachers.js.map
