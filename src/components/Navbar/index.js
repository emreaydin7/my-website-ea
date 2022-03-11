import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">
            <i class="fas fa-meteor">EA-7</i> 
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Ana Sayfa
          </Button>
        </Link>
        <Link to="hizmetler">
          <Button colorScheme="teal" variant="ghost">
            Hizmetler
          </Button>
        </Link>
        <Link to="hakkimizda">
          <Button colorScheme="teal" variant="ghost">
            Hakkımızda
          </Button>
        </Link>
        <Link to="iletisim">
          <Button colorScheme="teal" variant="ghost">
            İletişim
          </Button>
        </Link>
        <Link to="facebook">
          <Button colorScheme="teal" variant="ghost">
            <i class="fab fa-facebook-f"></i>
          </Button>
        </Link>
        <Link to="instagram">
          <Button colorScheme="teal" variant="ghost">
            <i class="fab fa-instagram"></i>
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
