const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <h2 id="modal-title">Accessible Modal</h2>

      <p>This modal is accessible for screen readers</p>

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;
