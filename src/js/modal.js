const modalRoot = document.querySelector('#modal-root');

export function modalWindow() {
  modalRoot.innerHTML = `
    <section class="backdrop">
      <div class="modal">
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </div>
    </section>
  `;
}
