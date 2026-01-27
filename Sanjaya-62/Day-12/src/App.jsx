import { useState } from "react";
import Modal from "./components/Model";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default App;
