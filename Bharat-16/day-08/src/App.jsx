import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile";
import Users from "./components/Users";
import "./styles/app.css";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <h1>🌟 Custom Hooks Demo</h1>
        <Profile />
        <Users />
      </div>
    </AuthProvider>
  );
}

export default App;
