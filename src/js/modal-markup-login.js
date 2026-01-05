export function createMarkupLogin() {
  return `
    <section class="backdrop">
     <div class="modal">
      <button  class="closeButton" type="button">&times;</button>
<div class="box-title">
 <h2 class="modal-title">Log In</h2>
         <p class="modal-text">Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
</div>

<form class="form-login" name="form-login">
<input class="form-user-input" type='email' name="email" placeholder="Email"/>

<div class="password-box">
<input class="form-user-input" type='password' name='password' placeholder='Password'/>
<button type="button" class="password">
<svg width="20" height="20" class="icon-eye-off">
      <use href="#icon-eye-off"></use>
    </svg></button>
</div>


<button class="btn-login" type='submit'>Log In</button>

</form>

</div>
    </section>
    `;
}
