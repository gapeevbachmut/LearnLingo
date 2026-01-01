export function createMarkupTrialLesson(teacher) {
  return `
    <section class="backdrop">
      <div class="modal">
      <button  class="closeButton" type="button">&times;</button>
      <div class="box-title">
      <h1 class="modal-title">Book trial lesson</h1>
        <p class="modal-text">Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
         </div>

         <div class="box-teacher">
         <div class="img-teacher-box">
   <img src='${teacher.avatar_url || '../img/main-content/default-avatar.png'} '
     alt="${teacher.name || 'Teacher'} " class="form-avatar" width="44"
      height="44" />
             </div>
             <div class="teacher-info">
            <p class="teacher-info-title">Your teacher</p>
         <h2 class="teacher-info-name">${teacher.name} ${teacher.surname}</h2>
             </div>

         </div>

     <form class="form-lesson" name="trial_lesson" autocomplete="off">
       <fieldset class="form-ask">
         <legend class="form-ask-title">What is your main reason for learning English?</legend>
         <label class="form-ask-label">
          <input type="radio" name="lesson" value="Career-and-business" checked/>
             Career and business</label>
         <label class="form-ask-label">
           <input type="radio" name="lesson" value="Lesson-for-kids"/>
             Lesson for kids</label>
         <label class="form-ask-label">
           <input type="radio" name="lesson" value="Living-abroad"/>
             Living abroad</label>
         <label class="form-ask-label">
           <input type="radio" name="lesson" value="Exams-and-coursework"/>
             Exams and coursework</label>
         <label class="form-ask-label">
           <input type="radio" name="lesson" value="travel-or-hobby"/>
             Culture, travel or hobby</label>

         </fieldset>


       <fieldset class="form-user">
         <input class="form-user-input" type="text" name="username" placeholder="Full Name" autofocus/>
         <input class="form-user-input" type="email" name="email" placeholder="Email"/>
         <input class="form-user-input" type="tel" name="phone-number" placeholder="Phone number"/>
         </fieldset>




         <button class="btn-form-lesson" type="submit">Trial lesson</button>
         </form>

      </div>
    </section>
  `;
}
