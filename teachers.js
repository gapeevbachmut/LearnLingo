import{m as T}from"./assets/main-CRASTpNa.js";import{a as q}from"./assets/vendor-CJFyyV97.js";function E(e){return`
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
    `}function S(e,s){return`
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
${E(e)}
    <!-- ---------------------------------------------------------------------- -->

    <!-- Levels -->
    <ul class="teacher-levels">
${e.levels.map(n=>`<li class='teacher-level'><p>#${n}</p></li>`).join("")}

    </ul>

    <button type='button' class="trial-lesson-btn is-hidden" ${e}>Book trial lesson</button>

  </div>
</li>
    `}const o=document.querySelector(".teachers-list"),f=document.querySelector(".load-more-btn"),x=4;let m=1,i=[];function c(e){i=e,m=1,L()}function L(){const e=m*x,s=i.slice(0,e),n=s.map((t,a)=>S(t,a)).join("");o.innerHTML=n,s.length>=i.length&&(f.style.display="none")}f.addEventListener("click",()=>{m+=1,L()});o.addEventListener("click",e=>{const s=e.target.closest(".teacher-read-more");if(!s)return;const n=s.closest(".teacher-card"),t=n.querySelector(".teacher-extra"),a=n.querySelector(".trial-lesson-btn");o.querySelectorAll(".teacher-card").forEach(r=>{r!==n&&(r.querySelector(".teacher-extra")?.classList.add("is-hidden"),r.querySelector(".trial-lesson-btn")?.classList.add("is-hidden"),r.querySelector(".teacher-read-more")?.classList.remove("is-hidden"))}),t.classList.toggle("is-hidden")?(s.classList.remove("is-hidden"),a.classList.add("is-hidden")):(s.classList.add("is-hidden"),a.classList.remove("is-hidden"));const b=Number(n.dataset.index),w=i[b],y=r=>{r.stopPropagation(),T({type:"trial",teacher:w})};a&&a.addEventListener("click",y)});const l=document.querySelector(".scroll-top"),$=()=>{window.scrollY>350?l.classList.remove("is-hidden"):l.classList.add("is-hidden")};window.addEventListener("scroll",$);$();const k=()=>window.scrollTo({top:0,behavior:"smooth"});l.addEventListener("click",k);const d=document.querySelector(".language");let u=[];function _(e){u=e;const s=e.flatMap(t=>t.languages);[...new Set(s)].forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=t,d.append(a)}),d.value=""}d.addEventListener("change",e=>{const s=e.target.value;if(!s){c(u);return}const n=u.filter(t=>t.languages.includes(s));c(n)});const P="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function M(){const e=await q.get(P);return e.data?Object.values(e.data):[]}const p=document.querySelector(".level");let h=[];function R(e){h=e;const s=e.flatMap(t=>t.levels);[...new Set(s)].forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=t,p.append(a)}),p.value=""}p.addEventListener("change",e=>{const s=e.target.value;if(!s){c(h);return}const n=h.filter(t=>t.levels.includes(s));c(n)});const v=document.querySelector(".price");let g=[];function j(e){g=e;const s=e.map(t=>t.price_per_hour);[...new Set(s)].sort((t,a)=>t-a).forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=`${t} $`,v.append(a)}),v.value=""}v.addEventListener("change",e=>{const s=e.target.value,n=Number(s);if(!s){c(g);return}const t=g.filter(a=>a.price_per_hour===n);c(t)});async function B(){const e=await M();c(e),_(e),R(e),j(e)}B();
//# sourceMappingURL=teachers.js.map
