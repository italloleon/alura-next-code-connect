import styles from "./aside.module.css";
import Image from "next/image";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  );
};
