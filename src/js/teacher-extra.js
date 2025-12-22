//

export function createTeacherExtra(teacher) {
  return `
    <div class="teacher-extra is-hidden">
    <p><strong>Lesson info:</strong> ${teacher.lesson_info}</p>

    <p><strong>Experience:</strong> ${teacher.experience}</p>

    <h3>Reviews</h3>
    <ul class="teacher-reviews">
      ${teacher.reviews
        .map(
          review => `
          <li class="review-item">
            <p><strong>${review.reviewer_name}</strong> ⭐ ${review.reviewer_rating}</p>
            <p>${review.comment}</p>
          </li>
        `
        )
        .join('')}
    </ul>
  </div>
    `;
}
