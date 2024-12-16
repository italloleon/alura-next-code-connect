"use client";

import { useEffect, useState } from "react";
import styles from "./replies.module.css";
import { Comment } from "../Comment";

export const Replies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const [replies, setReplies] = useState([]);

  async function fetchReplies() {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  }

  useEffect(() => {
    if (showReplies) {
      fetchReplies();
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>

        {showReplies &&
          comment.children &&
          replies.map((reply) => <Comment key={reply.id} comment={reply} />)}
      </div>
    </div>
  );
};
