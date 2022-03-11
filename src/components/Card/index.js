import product_card from "../data/product_data";
import styles from "./styles.module.css";
function Card() {
  const listItems = product_card.map((item) => (
    <div className={styles.card1} key={item.id}>
      <div className={styles.card1_img}>
        <img src={item.thumb} alt="" />
        <div className={styles.card1_name}>{item.product_name}</div>
      </div>
    </div>
  ));

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.title}>HİZMETLERİMİZ</h2>
        {listItems}
      </div>
    </section>
  );
}

export default Card;
