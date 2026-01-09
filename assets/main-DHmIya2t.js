import{b as y,g,c as m,d as i,s as v,e as w,u as k,f as E,o as x}from"./vendor-DSAFy7k_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const M=new Date,S=document.querySelector(".date-year");S.textContent=M.getFullYear();const L=`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <defs>
    <symbol id="icon-log-in" viewBox="0 0 32 32">
      <path fill="none" stroke="#f4c550" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.2" d="M20 4h1.6c2.24 0 3.36 0 4.216.436a3.996 3.996 0 0 1 1.748 1.748C28 7.04 28 8.16 28 10.4v11.2c0 2.24 0 3.36-.436 4.216a4.001 4.001 0 0 1-1.748 1.748C24.96 28 23.84 28 21.6 28H20M13.333 9.333 20 16m0 0-6.667 6.667M20 16H4" style="stroke:var(--color1, #f4c550)"/>
    </symbol>
<!--  -->
<symbol id="icon-log-out" viewBox="0 0 24 24">
<path fill="#f4c550"  stroke="#f4c550" d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</symbol>
    <!--  -->
    <symbol id="icon-star" viewBox="0 0 32 32">
      <path fill="#ffc531" stroke="#ffc531" stroke-width="2.4" d="M19.6 9.395a2.201 2.201 0 0 0 1.57 1.141l7.6 1.313-5.375 5.535a2.2 2.2 0 0 0-.6 1.846l1.098 7.635-6.922-3.402-.234-.1a2.203 2.203 0 0 0-1.473 0l-.234.1-6.924 3.402 1.1-7.635a2.2 2.2 0 0 0-.6-1.846l-5.377-5.535 7.602-1.313a2.198 2.198 0 0 0 1.57-1.141l3.6-6.822 3.6 6.822z" style="fill:var(--color2, #ffc531);stroke:var(--color2, #ffc531)"/>
    </symbol>
    <symbol id="icon-ukraine" viewBox="0 0 32 32">
      <path fill="#ffda44" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z" style="fill:var(--color3, #ffda44)"/>
      <path fill="#338af3" d="M0 16C0 7.164 7.163 0 16 0s16 7.163 16 16z" style="fill:var(--color4, #338af3)"/>
    </symbol>
    <symbol id="icon-book-open" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M29.333 8.267c0-1.493 0-2.24-.291-2.811a2.666 2.666 0 0 0-1.165-1.165C27.306 4 26.56 4 25.066 4h-.533c-2.987 0-4.48 0-5.621.581a5.331 5.331 0 0 0-2.331 2.331C16 8.053 16 9.546 16 12.533V28l.133-.2c.926-1.389 1.389-2.084 2.001-2.587a5.345 5.345 0 0 1 1.837-.983c.758-.23 1.593-.23 3.262-.23h1.833c1.494 0 2.24 0 2.811-.291.502-.256.91-.664 1.165-1.165.291-.57.291-1.317.291-2.811V8.266zM2.667 8.267c0-1.493 0-2.24.291-2.811.256-.502.664-.91 1.165-1.165C4.693 4 5.44 4 6.934 4h.533c2.987 0 4.48 0 5.621.581a5.331 5.331 0 0 1 2.331 2.331C16 8.053 16 9.546 16 12.533V28l-.133-.2c-.926-1.389-1.389-2.084-2.001-2.587a5.345 5.345 0 0 0-1.837-.983C11.271 24 10.436 24 8.767 24H6.934c-1.493 0-2.24 0-2.811-.291a2.666 2.666 0 0 1-1.165-1.165c-.291-.57-.291-1.317-.291-2.811V8.266z"/>
    </symbol>
    <symbol id="icon-hover" viewBox="0 0 32 32">
      <path fill="#f4c550" stroke="#f4c550" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.231" d="M27.787 6.147a7.326 7.326 0 0 0-10.373 0L16.001 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374l11.787 11.787 11.787-11.787a7.326 7.326 0 0 0 0-10.373z" style="fill:var(--color1, #f4c550);stroke:var(--color1, #f4c550)"/>
    </symbol>
    <symbol id="icon-normal" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.462" d="M27.787 6.147a7.326 7.326 0 0 0-10.373 0L16.001 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374l11.787 11.787 11.787-11.787a7.326 7.326 0 0 0 0-10.373z"/>
    </symbol>
    <symbol id="icon-group" viewBox="0 0 32 32">
      <path fill="#fff" d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" style="fill:var(--color5, #fff)"/>
      <path fill="#38cd3e" d="M26.667 16c0 5.891-4.776 10.667-10.667 10.667S5.333 21.891 5.333 16 10.109 5.333 16 5.333 26.667 10.109 26.667 16z" style="fill:var(--color6, #38cd3e)"/>
    </symbol>
    <symbol id="icon-eye-off" viewBox="0 0 24 24">
      <path d="M10.128 5.214A7.908 7.908 0 0 1 11.988 5c1.758 0 3.309.559 4.658 1.393 1.119.692 2.089 1.567 2.894 2.448a18.701 18.701 0 0 1 2.318 3.156 16.723 16.723 0 0 1-1.778 2.542 1 1 0 0 0 1.518 1.302 18.991 18.991 0 0 0 2.283-3.37 1 1 0 0 0 .013-.919s-.396-.789-1.12-1.843a20.553 20.553 0 0 0-1.757-2.218c-.894-.979-2.004-1.987-3.319-2.8C16.103 3.706 14.192 3 12.012 3a9.899 9.899 0 0 0-2.34.266 1 1 0 1 0 .456 1.948zm-.101 6.228 2.531 2.531a2.003 2.003 0 0 1-2.531-2.532zM5.983 7.397 8.536 9.95a3.993 3.993 0 0 0-.608 2.266c.036 1.022.463 2.033 1.271 2.785s1.846 1.107 2.868 1.071a3.991 3.991 0 0 0 1.984-.608l2.322 2.322A8.962 8.962 0 0 1 11.989 19c-1.734 0-3.285-.559-4.634-1.393-1.119-.692-2.089-1.567-2.894-2.448a18.701 18.701 0 0 1-2.317-3.155 17.275 17.275 0 0 1 3.841-4.607zm-5.69-5.69 4.271 4.271a19.34 19.34 0 0 0-4.445 5.549.999.999 0 0 0-.013.92s.396.789 1.12 1.843a20.553 20.553 0 0 0 1.757 2.218c.894.979 2.004 1.987 3.319 2.8C7.897 20.294 9.808 21 12.012 21a10.98 10.98 0 0 0 5.815-1.759l4.466 4.466a.999.999 0 1 0 1.414-1.414l-8.876-8.876-.007-.007-4.209-4.21-.024-.024L1.707.293A.999.999 0 1 0 .293 1.707z"/>
    </symbol>
    <symbol id="icon-eye" viewBox="0 0 24 24">
      <path d="M.106 11.553a.997.997 0 0 0 0 .894s.396.789 1.12 1.843a20.553 20.553 0 0 0 1.757 2.218c.894.979 2.004 1.987 3.319 2.8C7.897 20.294 9.808 21 12 21s4.103-.706 5.698-1.692c1.315-.813 2.425-1.821 3.319-2.8a20.678 20.678 0 0 0 1.757-2.218 17.468 17.468 0 0 0 1.12-1.843.997.997 0 0 0 0-.894s-.396-.789-1.12-1.843a20.553 20.553 0 0 0-1.757-2.218c-.894-.979-2.004-1.987-3.319-2.8C16.103 3.706 14.192 3 12 3s-4.103.706-5.698 1.692c-1.315.813-2.425 1.821-3.319 2.8A20.455 20.455 0 0 0 1.226 9.71a17.468 17.468 0 0 0-1.12 1.843zM2.14 12a18.575 18.575 0 0 1 2.319-3.159c.805-.881 1.775-1.756 2.894-2.448C8.703 5.559 10.254 5 12 5s3.297.559 4.646 1.393c1.119.692 2.089 1.567 2.894 2.448A18.701 18.701 0 0 1 21.859 12a18.575 18.575 0 0 1-2.319 3.159c-.805.881-1.775 1.756-2.894 2.448C15.297 18.441 13.746 19 12 19s-3.297-.559-4.646-1.393c-1.119-.692-2.089-1.567-2.894-2.448A18.701 18.701 0 0 1 2.14 12zM16 12c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 16 12zm-2 0c0 .553-.223 1.051-.586 1.414S12.553 14 12 14s-1.051-.223-1.414-.586S10 12.553 10 12s.223-1.051.586-1.414S11.447 10 12 10s1.051.223 1.414.586S14 11.447 14 12z"/>
    </symbol>
    <symbol id="icon-up" viewBox="0 0 24 24">
<path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-5.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.096-0.096-0.206-0.168-0.324-0.217-0.122-0.051-0.253-0.076-0.383-0.076-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293v5.586c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>
</symbol>
  </defs>
</svg>
`;function q(){const e=document.createElement("svg");e.style.display="none",e.innerHTML=L,document.body.prepend(e)}function A(){document.addEventListener("click",e=>{const t=e.target.closest(".password-toggle");if(!t)return;const r=t.closest(".password-box");if(!r)return;const a=r.querySelector("input"),o=t.querySelector("use");if(!a||!o)return;const s=a.type==="password";a.type=s?"text":"password",o.setAttribute("href",s?"#icon-eye":"#icon-eye-off"),t.setAttribute("aria-label",s?"Hide password":"Show password")})}const C={apiKey:"AIzaSyBM5Y6QM2r6WXTF8zM7dWPy11UsmUn6HlI",authDomain:"learnlingo-auth-320f9.firebaseapp.com",projectId:"learnlingo-auth-320f9",storageBucket:"learnlingo-auth-320f9.firebasestorage.app",messagingSenderId:"1060134815936",appId:"1:1060134815936:web:65e14830a23616ff3e0525"},z=y(C),u=g(z),B=m({username:i().required("Name is required").min(3,"Minimum 3 characters").max(30,"Max 30 characters"),email:i().required("Email is required").email("Enter a valid email, for example: user@gmail.com"),phoneNumber:i().required("Phone is required").matches(/^\+?\d{10,14}$/,"Phone format: +380XXXXXXXXX").transform(e=>e.replace(/\s|-/g,""))}),O=m({email:i().required("Email is required").email("Enter a valid email, for example: user@gmail.com"),password:i().required("Password is required").min(8,"Minimum 8 characters").max(30,"Max 30 characters")}),P=m({username:i().required("Name is required").min(3,"Minimum 3 characters").max(30,"Max 30 characters"),email:i().required("Email is required").email("Enter a valid email, for example: user@gmail.com"),password:i().required("Password is required").min(8,"Minimum 8 characters").max(30,"Max 30 characters")});function f(e){const t={};e.inner.forEach(r=>{t[r.path]=r.message}),Object.entries(t).forEach(([r,a])=>{const o=document.querySelector(`[name="${r}"]`);if(!o)return;let s=o.nextElementSibling;(!s||!s.classList.contains("error"))&&(s=document.createElement("p"),s.classList.add("error"),o.after(s)),s.textContent=a})}function T(e){const t=document.querySelector(".form-lesson");t&&t.addEventListener("submit",async r=>{r.preventDefault(),t.querySelectorAll(".error").forEach(s=>s.remove());const a=new FormData(t),o=Object.fromEntries(a.entries());try{await B.validate(o,{abortEarly:!1}),console.log("BOOKING-FORM DATA:",o),e()}catch(s){f(s)}})}async function F(e,t){return(await v(u,e,t)).user}function I(e){const t=document.querySelector(".form-login");t&&t.addEventListener("submit",async r=>{r.preventDefault(),t.querySelectorAll(".error").forEach(s=>s.remove());const a=new FormData(t),o=Object.fromEntries(a.entries());try{await O.validate(o,{abortEarly:!1}),console.log("LOGIN-FORM DATA:",o),await F(o.email,o.password),e()}catch(s){f(s)}})}function D(){return`
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


<button class="btn-login" type='submit'>Log In</button>

</form>

</div>
    </section>
    `}function H(){return`
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
    `}function N(e){return`
    <section class="backdrop">
      <div class="modal">
      <button  class="closeButton" type="button">&times;</button>
      <div class="box-title">
      <h1 class="modal-title">Book trial lesson</h1>
        <p class="modal-text">Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
         </div>

         <div class="box-teacher">
         <div class="img-teacher-box">
   <img src='${e.avatar_url||"../img/main-content/default-avatar.png"} '
     alt="${e.name||"Teacher"} " class="form-avatar" width="44"
      height="44" />
             </div>
             <div class="teacher-info">
            <p class="teacher-info-title">Your teacher</p>
         <h2 class="teacher-info-name">${e.name} ${e.surname}</h2>
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
           <input type="radio" name="lesson" value="Culture, travel-or-hobby"/>
             Culture, travel or hobby</label>

         </fieldset>


       <fieldset class="form-user">
         <input class="form-user-input" type="text" name="username" placeholder="Full Name" />
         <input class="form-user-input" type="email" name="email" placeholder="Email"/>
         <input class="form-user-input" type="tel" name="phoneNumber" placeholder="Phone number"/>
         </fieldset>




         <button class="btn-form-lesson" type="submit">Book</button>
         </form>

      </div>
    </section>
  `}async function R(e,t,r){const a=await w(u,t,r);return await k(a.user,{displayName:e}),a.user}function U(e){const t=document.querySelector(".form-register");t&&t.addEventListener("submit",async r=>{r.preventDefault(),t.querySelectorAll(".error").forEach(s=>s.remove());const a=new FormData(t),o=Object.fromEntries(a.entries());try{await P.validate(o,{abortEarly:!1}),console.log("REGISTER-FORM DATA:",o),await R(o.username,o.email,o.password),e()}catch(s){f(s)}})}const c=document.querySelector("#modal-root");function j(){document.body.classList.add("no-scroll")}function X(){document.body.classList.remove("no-scroll")}function h(e){const{type:t,teacher:r}=e;let a="";switch(t){case"trial":a=N(r);break;case"login":a=D();break;case"register":a=H();break;default:return}c.innerHTML=a,j();const o=c.querySelector(".backdrop"),s=c.querySelector(".closeButton"),n=()=>{c.innerHTML="",X(),document.removeEventListener("keydown",p)},p=d=>{d.key==="Escape"&&n()};o.addEventListener("click",d=>{d.target===o&&n()}),s.addEventListener("click",n),document.addEventListener("keydown",p),t==="trial"&&T(n),t==="login"&&I(n),t==="register"&&U(n)}function $(e){e.innerHTML=`
    <li>
      <button type="button" class="logIn">
        <svg width="20" height="20">
          <use href="#icon-log-in"></use>
        </svg>
        Log in
      </button>
    </li>
    <li>
      <button type="button" class="register">Registration</button>
    </li>
  `,e.querySelector(".logIn").addEventListener("click",()=>h({type:"login"})),e.querySelector(".register").addEventListener("click",()=>h({type:"register"}))}async function W(){await E(u)}function V(e){return`
    <li class="out-box">

  <button type="button" class="logout">
    <svg width="20" height="20">
      <use href="#icon-log-out"></use>
    </svg>Log out  </button>

  <p class="out-text">Hello, ${e.displayName||e.email} </p>
    </li>`}function Y(e,t){e.innerHTML=`
    <li class="on-favorites"><a href="./favorites.html">Favorites</a></li>
${V(t)}

  `,e.addEventListener("click",async r=>{r.target.classList.contains("logout")&&await W()})}let l=null,b=[];function G(){const e=document.querySelector(".auth-list");e&&x(u,t=>{l=t||null,b.forEach(r=>r(l)),t?Y(e,t):$(e)})}function Q(){return l}function J(e){l!==null&&e(l),b.push(e)}function K(){const e=document.querySelector(".scroll-top");if(!e)return;const t=()=>{window.scrollY>350?e.classList.remove("is-hidden"):e.classList.add("is-hidden")};window.addEventListener("scroll",t),t();const r=()=>window.scrollTo({top:0,behavior:"smooth"});e.addEventListener("click",r)}G();q();A();K();export{Q as g,h as m,J as o};
//# sourceMappingURL=main-DHmIya2t.js.map
