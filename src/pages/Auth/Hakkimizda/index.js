import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Hakkimizda() {
  return (
    <div className={styles.title}>
      <main className={styles.main}>
        <h3>
          ea ORGANİZASYON <br /> HAKKINDA <br />
        </h3>
        <br />
        <br />
        <br />
        <p>
          Bu, bir paragraf. Kendi metninizi eklemek için tıklayın. <br />
          İçeriğinizi eklemek ve yazı tipini değiştirmek için “Metni <br />{" "}
          Düzenle”ye tek veya buraya çift tıklayın.
        </p>
      </main>
      <br />
      <br />
      <br />
      <nav className={styles.nav}>
        <Link to="/">
          <Button className={styles.btn} colorScheme="teal" variant="outline">
            ANASAYFA
          </Button>
        </Link>

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
  );
}

export default Hakkimizda;
