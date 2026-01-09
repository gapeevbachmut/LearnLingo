import{g as o,m as c}from"./main-DidtCetA.js";import{i as h,a as p}from"./vendor-DSAFy7k_.js";function l(e){return JSON.parse(localStorage.getItem(`favorites_${e}`))||[]}function u(e,t){localStorage.setItem(`favorites_${e}`,JSON.stringify(t))}function v(e,t){const s=l(e),a=s.indexOf(t);return a===-1?s.push(t):s.splice(a,1),u(e,s),s}function d(e,t){return l(e).includes(t)}function g(e){return`
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
    `}function k(e){const t=o(),a=t&&d(t.uid,e.id)?"#icon-hover":"#icon-normal";return`
<li  class="teacher-card"
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
             <use href="${a}"></use>
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
${g(e)}
    <!-- ---------------------------------------------------------------------- -->

    <!-- Levels -->
    <ul class="teacher-levels">
${e.levels.map(r=>`<li class='teacher-level'><p>#${r}</p></li>`).join("")}

    </ul>

    <button type='button' class="trial-lesson-btn is-hidden" ${e}>Book trial lesson</button>

  </div>
</li>
    `}function f(){h.show({title:"Hello!",message:"This feature is available only to authorized users!",zindex:9999,position:"topCenter",backgroundColor:"#f4c550",progressBarColor:"rgb(0, 255, 184)",pauseOnHover:!0})}function m(e){e.addEventListener("click",t=>{const s=t.target.closest(".teacher-like-btn");if(!s)return;const r=s.closest(".teacher-card").dataset.id,n=o();if(!n){f(),c({type:"login"});return}v(n.uid,r);const i=s.querySelector("use");d(n.uid,r)?i.setAttribute("href","#icon-hover"):i.setAttribute("href","#icon-normal")})}function T({container:e,getTeachers:t}){e&&(m(e),e.addEventListener("click",s=>{b(s,e),$(s,t())}))}function b(e,t){const s=e.target.closest(".teacher-read-more");if(!s)return;const a=s.closest(".teacher-card"),r=a.querySelector(".teacher-extra"),n=a.querySelector(".trial-lesson-btn");w(t,a),r.classList.toggle("is-hidden")?(s.classList.remove("is-hidden"),n.classList.add("is-hidden")):(s.classList.add("is-hidden"),n.classList.remove("is-hidden"))}function $(e,t){const s=e.target.closest(".trial-lesson-btn");if(!s)return;const r=s.closest(".teacher-card").dataset.id,n=t.find(i=>i.id===r);n&&c({type:"trial",teacher:n})}function w(e,t){e.querySelectorAll(".teacher-card").forEach(s=>{s!==t&&(s.querySelector(".teacher-extra")?.classList.add("is-hidden"),s.querySelector(".trial-lesson-btn")?.classList.add("is-hidden"),s.querySelector(".teacher-read-more")?.classList.remove("is-hidden"))})}const L="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function _(){const e=await p.get(L);return e.data?Object.entries(e.data).map(([t,s])=>({id:t,...s})):[]}export{k as c,_ as f,l as g,T as i};
//# sourceMappingURL=teachers-api-DkdgLDTG.js.map
