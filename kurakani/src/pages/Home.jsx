import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      
      {/* LOGO */}
      <header style={{ marginBottom: "40px" }}>
        <h2>LOGO</h2>
      </header>

      {/* HERO SECTION */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left Content */}
        <div style={{ width: "45%" }}>
          <h1>Welcome to Kurakani</h1>
          <h3>कुराकानीमा स्वागत छ</h3>

          <p>
            Learn essential English ⇄ Nepali phrases for everyday conversations.
          </p>

          <Link to="/categories">
            <button style={{ marginTop: "20px" }}>
              Start Learning
            </button>
          </Link>
        </div>

        {/* Right Image Placeholder */}
        <div 
          style={{
            width: "45%",
            height: "250px",
            backgroundColor: "#ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Image Placeholder
        </div>

      </div>
    </div>
  );
}

export default Home;