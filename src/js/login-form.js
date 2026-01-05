import { loginUser } from './auth-login';
import { showErrors } from './booking-show-error';
import { loginSchema } from './form-validation-schema';

export function loginFormSubmit(onSuccess) {
  const formLogin = document.querySelector('.form-login');
  if (!formLogin) return;

  // ----   асинхронна тому що yup.validate() повертає Promise

  formLogin.addEventListener('submit', async event => {
    event.preventDefault();
    formLogin.querySelectorAll('.error').forEach(el => el.remove());
    // видаляю старі помилки до перевірки

    const formData = new FormData(formLogin);
    const data = Object.fromEntries(formData.entries());

    try {
      await loginSchema.validate(data, { abortEarly: false });
      console.log('LOGIN-FORM DATA:', data);

      // тут firebase auth
      await loginUser(data.email, data.password);

      onSuccess(); // закриваємо модалку
    } catch (error) {
      showErrors(error);
    }
  });
}
