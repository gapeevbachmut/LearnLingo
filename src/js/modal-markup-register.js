export function createMarkupRegister() {
  return `
    <section class="backdrop">
     <div class="modal">
      <button  class="closeButton" type="button">&times;</button>
<div class="box-title">
<h2 class="modal-title">Registration</h2>
         <p class="modal-text">Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>

</div>
          <form class="form-register" name="form-register">
<input class="form-user-input" type="text" name="username" placeholder="Name" />
<input class="form-user-input" type='email' name="email" placeholder="Email"/>

<div class="password-box">
<input
   class="form-user-input"
   type='password'
   name='password'
   placeholder='Password'/>

<button
   type="button"
   class="password-toggle"
   aria-label="Show password">

     <svg width="20" height="20" class="icon-eye">
       <use href="#icon-eye-off"></use>
     </svg></button>
</div>
<button class="btn-register" type='submit'>Sign Up</button>

</form>

</div>
    </section>
    `;
}
