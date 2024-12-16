"use client";

import { useRef } from "react";
import { Modal } from "../Modal";
import styles from "./modalreply.module.css";
import { Textarea } from "../TextArea";
import { SubmitButton } from "../SubmitButton";
import { commentReply } from "@/actions";
import { Comment } from "../Comment";

export const ModalReply = ({ comment }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const action = commentReply.bind(null, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
