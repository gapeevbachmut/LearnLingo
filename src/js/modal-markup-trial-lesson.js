export function createMarkupTrialLesson(teacher) {
  return `
    <section class="backdrop">
      <div class="modal">
      <button  class="closeButton" type="button">&times;</button>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
        <h2>${teacher.name}</h2>
      </div>
    </section>
  `;
}
