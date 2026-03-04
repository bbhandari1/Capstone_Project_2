import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          Kurakani
        </Link>
      </div>

      <div style={styles.navLinks}>
        <Link to="/categories" style={styles.link}>
          Categories
        </Link>

        <Link to="/flashcards" style={styles.link}>
          Flashcards
        </Link>

        <Link to="/eng-nep" style={styles.link}>
          Eng–Nep
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px"
  },
  navLinks: {
    display: "flex",
    gap: "25px"
  },
  link: {
    textDecoration: "none",
    color: "#333"
  }
};

export default Navbar;