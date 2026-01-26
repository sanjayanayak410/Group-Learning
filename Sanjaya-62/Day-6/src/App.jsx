 import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Redux/counterSlice";

function App() {
  const { user } = useContext(UserContext);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User (Context): {user}</h2>
      <h2>Count (Redux): {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}

export default App;
