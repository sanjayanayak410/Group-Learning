import useAuth from "../hooks/useAuth";

function Profile() {
  const { user, login, logout } = useAuth();

  return (
    <div className="card">
      <h2>🔐 Profile</h2>

      {user ? (
        <>
          <p className="success">
            Welcome, <strong>{user.name}</strong> 💙
          </p>
          <button className="btn danger" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn" onClick={() => login("Sibu")}>
          Login
        </button>
      )}
    </div>
  );
}

export default Profile;
