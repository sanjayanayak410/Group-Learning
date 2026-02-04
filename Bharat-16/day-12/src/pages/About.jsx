import { useEffect, useRef, useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      modalRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <h1>About</h1>

      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div tabIndex="-1" ref={modalRef}>
            <h2 id="modal-title">Accessible Modal</h2>
            <p>This modal supports keyboard and screen readers.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
