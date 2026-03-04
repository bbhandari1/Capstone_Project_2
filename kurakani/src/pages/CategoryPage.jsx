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
      <h1 style={{ marginBottom: "30px" }}>Categories</h1>

      <div style={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            style={styles.cardLink}
          >
            <div style={styles.card}>
              <div style={styles.imagePlaceholder}></div>
              <h3>{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px"
  },
  cardLink: {
    textDecoration: "none",
    color: "black"
  },
  card: {
    border: "1px solid #ddd",
    padding: "25px",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px"
  },
  imagePlaceholder: {
    height: "100px",
    backgroundColor: "#ddd",
    marginBottom: "15px",
    borderRadius: "6px"
  }
};

export default Categories;