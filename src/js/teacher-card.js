export function createTeacherCard(teacher) {
  return `
<li class="teacher-card">
  <!-- Avatar -->
  <div class="teacher-avatar">
    <img src='${teacher.avatar_url}' alt="${
    teacher.name
  }" class="teacher-avatar-img" width="96"
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
                <p class="teacher-languages">${teacher.languages}</p>

        <h2 class="teacher-name">
          ${teacher.name} ${teacher.surname}
        </h2>
      </div>
      <!-- Top info row -->
      <div class="teacher-meta">

        <p class="teacher-lessons-online">
          <svg width="16" height="16" class="svg-book">
            <use href="/img/sprite.svg#icon-book-open"></use>
          </svg>
          Lessons online
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-lessons-done">
          Lessons done: <span>${teacher.lessons_done}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-rating">
          <svg width="16" height="16" class="svg-star">
            <use href="/img/sprite.svg#icon-star"></use>
          </svg>
          Rating: <span>${teacher.rating}</span>
        </p>
        <span class="teacher-separator">|</span>
        <p class="teacher-price">
          Price / 1 hour: <span class="price-color">${
            teacher.price_per_hour
          }$</span>
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
        <span class="teacher-info-language"> ${teacher.languages}</span>

      </p>

      <p class="teacher-lesson-info">
        <span class="teacher-info-label">Lesson Info:</span>
${teacher.lesson_info}      </p>

      <p class="teacher-conditions">
        <span class="teacher-info-label">Conditions:</span>
${teacher.conditions}      </p>

    </div>

    <!-- Read more -->
    <button class="teacher-read-more" type="button">
      Read more
    </button>

    <!-- Levels -->
    <ul class="teacher-levels">
${teacher.levels
  .map(level => `<li class='teacher-level'><p>#${level}</p></li>`)
  .join('')}

    </ul>

  </div>
</li>
    `;
}
