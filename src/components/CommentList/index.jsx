import { Comment } from "../Comment";
import { ModalReply } from "../ModalReply";
import { Replies } from "../Replies";
import styles from "./commentlist.module.css";

export const CommentList = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h2>Comentarios</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
            <ModalReply comment={comment} />
            <Replies comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
};
