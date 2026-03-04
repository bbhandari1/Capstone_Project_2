import { Link } from "react-router-dom";

const categories = [
  "Greetings",
  "Food and Drink",
  "Travel",
  "Numbers",
  "Directions",
  "Emergency"
];

function Categories() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Categories</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "30px",
                textAlign: "center",
                borderRadius: "8px"
              }}
            >
              <div
                style={{
                  height: "100px",
                  backgroundColor: "#ddd",
                  marginBottom: "15px"
                }}
              />
              <h3>{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;