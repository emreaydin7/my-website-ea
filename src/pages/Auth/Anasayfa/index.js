import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./styles.module.css";

function Anasayfa() {
  return (
    <body className={styles.maincontainer}>
      <div className={styles.title}>
        <main>
          <h2 className={styles.title}> ea Organizasyon</h2>
          <h3>
          EN UNUTULMAZ <br /> ANLARINIZDA <br /> YANINZDA  <br />
          </h3>
        </main>
        <nav className={styles.nav}>
          <Link to="/hizmetler">
            <Button className={styles.btn} colorScheme="teal" variant="outline">
              HİZMETLER
            </Button>
          </Link>
        </nav>
        
        <p className={styles.dipnot}>
          © 2022, Q Organizasyon. ea7.com ile oluşturuldu.
        </p>
      </div>
    </body>
  );
}

export default Anasayfa;
