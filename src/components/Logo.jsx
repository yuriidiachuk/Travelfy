import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logoblock}>
        <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
      </div>
    </Link>
  );
}

export default Logo;
