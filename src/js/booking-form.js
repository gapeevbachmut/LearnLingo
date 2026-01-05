import { bookingSchema } from './form-validation-schema';
import { showErrors } from './booking-show-error';

export function bookingFormSubmit(onSuccess) {
  const bookingForm = document.querySelector('.form-lesson');
  if (!bookingForm) return;

  // ----   асинхронна тому що yup.validate() повертає Promise
  bookingForm.addEventListener('submit', async event => {
    event.preventDefault();

    bookingForm.querySelectorAll('.error').forEach(el => el.remove());
    // видаляю старі помилки до перевірки

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());

    try {
      await bookingSchema.validate(data, { abortEarly: false });
      console.log('BOOKING-FORM DATA:', data);

      // тут буде firebase auth

      // const { lesson, username, email, phoneNumber } = data;
      // console.log(data.lesson);
      // console.log(data.username);
      // console.log(data.email);
      // console.log(data.phoneNumber);

      onSuccess(); // закриваємо модалку
    } catch (error) {
      showErrors(error);
    }
  });
}
