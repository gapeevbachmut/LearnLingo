export function showErrors(error) {
  const errors = {};

  error.inner.forEach(err => {
    errors[err.path] = err.message;
  });

  Object.entries(errors).forEach(([name, message]) => {
    const input = document.querySelector(`[name="${name}"]`);
    if (!input) return;

    let errorEl = input.nextElementSibling;

    if (!errorEl || !errorEl.classList.contains('error')) {
      errorEl = document.createElement('p');
      errorEl.classList.add('error');
      input.after(errorEl);
    }

    errorEl.textContent = message;
  });
}
