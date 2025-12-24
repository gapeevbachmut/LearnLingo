//

export function createTeacherExtra(teacher) {
  return `
    <div class="teacher-extra is-hidden">

    <p class="extra-experience"> ${teacher.experience}</p>

    <h3 class="is-hidden">Reviews</h3>
    <ul class="teacher-reviews">
      ${teacher.reviews
        .map(
          review => `
          <li class="review-item">
            <p class="review-title"><span class="review-name">${
              review.reviewer_name
            }</span>
            <span> <svg width="16" height="16" class="svg-star">
            <use href="#icon-star"></use>
          </svg></span>
              <span>${review.reviewer_rating.toFixed(1)}</span>

            </p>
            <p class="review-comment">${review.comment}</p>
          </li>
        `
        )
        .join('')}
    </ul>
  </div>
    `;
}
