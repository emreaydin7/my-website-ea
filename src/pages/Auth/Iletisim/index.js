import React from "react";
import styles from "./styles.module.css";

function Iletisim() {
  return (
    <div className={styles.title}>
      <main>
        <h2 className={styles.title}> BİZE ULAŞIN</h2>
        <h3>
          Etkinliğinizi Planlayalım <br />
        </h3>
      </main>
      <nav className={styles.nav}>
        <p className={styles.iletisim}>
          Telefon <span> Adres</span> <span> E-posta</span>
        </p>
      </nav>
      <p className={styles.dipnot}>
        © 2022, Q Organizasyon. ea7.com ile oluşturuldu.
      </p>
    </div>
  );
}

export default Iletisim;
