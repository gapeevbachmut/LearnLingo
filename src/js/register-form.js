import { registerUser } from './auth-register';
import { showErrors } from './booking-show-error';
import { registerSchema } from './form-validation-schema';

export function registerFormSubmit(onSuccess) {
  const formRegister = document.querySelector('.form-register');
  if (!formRegister) return;

  // ----   асинхронна тому що yup.validate() повертає Promise

  formRegister.addEventListener('submit', async event => {
    event.preventDefault();
    formRegister.querySelectorAll('.error').forEach(el => el.remove());
    // видаляю старі помилки до перевірки

    const formData = new FormData(formRegister);
    const data = Object.fromEntries(formData.entries());

    try {
      await registerSchema.validate(data, { abortEarly: false });
      console.log('REGISTER-FORM DATA:', data);

      // тут firebase auth
      await registerUser(data.username, data.email, data.password);

      onSuccess(); // закриваємо модалку
    } catch (error) {
      showErrors(error);
    }
  });
}
