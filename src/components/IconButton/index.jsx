import styles from "./iconbutton.module.css";

export const IconButon = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
};
