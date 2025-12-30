export function createMarkupTrialLesson(teacher) {
  return `
    <section class="backdrop">
      <div class="modal">
      <button  class="closeButton" type="button">&times;</button>
      <div><h1>Book trial lesson</h1>
        <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
         </div>

         <div>
         <div>
   <img src='${teacher.avatar_url || '../img/main-content/default-avatar.png'} '
     alt="${teacher.name || 'Teacher'} " class="form-avatar" width="44"
      height="44" />         </div>
         <p>Your teacher</p>
         <h2>${teacher.name} ${teacher.surname}</h2>
         </div>

      </div>
    </section>
  `;
}
