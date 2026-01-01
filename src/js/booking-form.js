export function bookingFormSubmit(onSuccess) {
  const bookingForm = document.querySelector('.form-lesson');
  if (!bookingForm) return;

  bookingForm.addEventListener(
    'submit',
    event => {
      event.preventDefault();

      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());

      console.log('FORM DATA:', data);
      const formValue = event.target;
      const lesson = formValue.elements.lesson.value;

      const username = formValue.elements.username.value;
      const email = formValue.elements.email.value;
      const phone = formValue.elements.phoneNumber.value;

      console.log(lesson);
      console.log(username);
      console.log(email);
      console.log(phone);

      onSuccess(); // закриваємо модалку
    },
    { once: true }
  );
}
