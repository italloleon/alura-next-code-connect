import Image from "next/image";
import styles from "./comment.module.css";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Image
        alt={`Comentario de ${comment.author.name}`}
        src={comment.author.avatar}
        width={32}
        height={32}
      />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
