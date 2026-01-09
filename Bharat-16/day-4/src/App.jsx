import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Page({ title, description, children }) {
  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={descStyle}>{description}</p>
      {children}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <Page
      title="🏠 Home"
      description="Welcome to my React Router demo application."
    >
      <button style={buttonStyle} onClick={() => navigate("/about")}>
        Learn More About Me →
      </button>
    </Page>
  );
}

function About() {
  return (
    <Page
      title="ℹ️ About"
      description="This section describes who I am and what I do."
    />
  );
}

function Services() {
  return (
    <Page
      title="🛠️ Services"
      description="Web development, frontend design, and React solutions."
    />
  );
}

function Skills() {
  return (
    <Page
      title="⚙️ Skills"
      description="React, JavaScript, HTML, CSS, Git, APIs."
    />
  );
}

function Education() {
  return (
    <Page
      title="🎓 Education"
      description="My academic background and certifications."
    />
  );
}

function Portfolio() {
  return (
    <Page
      title="📁 Portfolio"
      description="Projects showcasing my work and experience."
    />
  );
}

function Contact() {
  return (
    <Page
      title="📞 Contact"
      description="Get in touch with me for collaboration or queries."
    />
  );
}

function NotFound() {
  return (
    <Page
      title="❌ 404"
      description="The page you are looking for does not exist."
    />
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} style={linkStyle}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <span style={logoStyle}>MyPortfolio</span>
        <div style={navLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "linear-gradient(90deg, #1e3c72, #2a5298)",
};

const logoStyle = {
  color: "#fff",
  fontSize: "22px",
  fontWeight: "bold",
};

const navLinks = {
  display: "flex",
  gap: "18px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  padding: "6px 10px",
  borderRadius: "5px",
};

const pageStyle = {
  minHeight: "calc(100vh - 70px)",
  padding: "60px",
  backgroundColor: "#f4f6f8",
  fontFamily: "Segoe UI, sans-serif",
};

const titleStyle = {
  fontSize: "36px",
  color: "#1e3c72",
  marginBottom: "10px",
};

const descStyle = {
  fontSize: "18px",
  color: "#555",
  maxWidth: "600px",
};

const buttonStyle = {
  marginTop: "25px",
  padding: "12px 25px",
  fontSize: "16px",
  backgroundColor: "#1e3c72",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default App;
