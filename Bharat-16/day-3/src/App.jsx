

function App() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#020617",
        minHeight: "100vh",
        color: "#e5e7eb",
      }}
    >
      <h1>Props Drilling vs Composition</h1>

    
      <section style={{ marginBottom: "40px" }}>
        <h2>Props Drilling</h2>
        <PropsDrillingApp />
      </section>

      
      <section>
        <h2>Composition Pattern</h2>
        <CompositionApp />
      </section>
    </div>
  );
}



const containerStyle = {
  padding: "16px",
  backgroundColor: "#020617",
  border: "1px solid #334155",
  borderRadius: "8px",
};

const cardStyle = {
  padding: "16px",
  backgroundColor: "#020617",
  border: "1px solid #38bdf8",
  borderRadius: "8px",
  marginTop: "10px",
};



function PropsDrillingApp() {
  const user = { name: "Bharat", role: "Frontend Developer" };
  return (
    <div style={containerStyle}>
      <Dashboard user={user} />
    </div>
  );
}

function Dashboard({ user }) {
  return <Profile user={user} />;
}

function Profile({ user }) {
  return <UserDetails user={user} />;
}

function UserDetails({ user }) {
  return (
    <div style={cardStyle}>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}



function CompositionApp() {
  return (
    <div style={containerStyle}>
      <Card title="User Profile">
        <UserInfo />
      </Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={cardStyle}>
      <h3 style={{ color: "#38bdf8" }}>{title}</h3>
      {children}
    </div>
  );
}

function UserInfo() {
  const user = { name: "Bharat", role: "Frontend Developer" };
  return (
    <>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </>
  );
}

export default App;
