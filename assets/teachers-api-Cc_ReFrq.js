import{g as r}from"./main-C0wBvBBP.js";import{a as o}from"./vendor-CJFyyV97.js";function n(s){return JSON.parse(localStorage.getItem(`favorites_${s}`))||[]}function c(s,e){localStorage.setItem(`favorites_${s}`,JSON.stringify(e))}function u(s,e){const a=n(s),t=a.indexOf(e);return t===-1?a.push(e):a.splice(t,1),c(s,a),a}function l(s,e){return n(s).includes(e)}function p(s){return`
    <div class="teacher-extra is-hidden">

    <p class="extra-experience"> ${s.experience}</p>

    <h3 class="is-hidden">Reviews</h3>
    <ul class="teacher-reviews">
      ${s.reviews.map(e=>`
          <li class="review-item">
            <p class="review-title"><span class="review-name">${e.reviewer_name}</span>
            <span> <svg width="16" height="16" class="svg-star">
            <use href="#icon-star"></use>
          </svg></span>
              <span>${e.reviewer_rating.toFixed(1)}</span>

            </p>
            <p class="review-comment">${e.comment}</p>
          </li>
        `).join("")}
    </ul>
  </div>
    `}function g(s){const e=r(),t=e&&l(e.uid,s.id)?"#icon-hover":"#icon-normal";return`
<li  class="teacher-card"
     data-id="${s.id}">
  <!-- Avatar -->
  <div class="teacher-avatar">
    <img src='${s.avatar_url||"../img/main-content/default-avatar.png"} '
     alt="${s.name||"Teacher"} " class="teacher-avatar-img" width="96"
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
                <p class="teacher-languages">${s.languages}</p>

        <h2 class="teacher-name">
          ${s.name} ${s.surname}
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
          Lessons done: <span>${s.lessons_done}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-rating">
          <svg width="16" height="16" class="svg-star">
            <use href="#icon-star"></use>
          </svg>
          Rating: <span>${s.rating}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-price">
          Price / 1 hour: <span class="price-color">${s.price_per_hour}$</span>
        </p>
        <button class="teacher-like-btn" type="button" >
          <svg width="16" height="16" class="svg-heart">
             <use href="${t}"></use>
          </svg>
        </button>
      </div>
    </div>

    <!-- Skills / description -->
    <div class="teacher-info">

      <p class="teacher-speaks">
        <span class="teacher-info-label">Speaks:</span>
        <span class="teacher-info-language"> ${s.languages}</span>

      </p>

      <p class="teacher-lesson-info">
        <span class="teacher-info-label">Lesson Info:</span>
${s.lesson_info}      </p>

      <p class="teacher-conditions">
        <span class="teacher-info-label">Conditions:</span>
${s.conditions}      </p>

    </div>

    <!-- Read more -->
    <button class="teacher-read-more" type="button">
      Read more
    </button>
    <!-- ---------------------   teacher-extra   ------------------------------ -->
${p(s)}
    <!-- ---------------------------------------------------------------------- -->

    <!-- Levels -->
    <ul class="teacher-levels">
${s.levels.map(i=>`<li class='teacher-level'><p>#${i}</p></li>`).join("")}

    </ul>

    <button type='button' class="trial-lesson-btn is-hidden" ${s}>Book trial lesson</button>

  </div>
</li>
    `}const v="https://learnlingo-12-25-default-rtdb.firebaseio.com/.json";async function f(){const s=await o.get(v);return s.data?Object.entries(s.data).map(([e,a])=>({id:e,...a})):[]}export{g as c,f,n as g,l as i,u as t};
//# sourceMappingURL=teachers-api-Cc_ReFrq.js.map
