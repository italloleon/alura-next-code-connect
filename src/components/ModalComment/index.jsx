"use client";

import { useRef } from "react";
import { IconButon } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import styles from "./modalcomment.module.css";
import { Textarea } from "../TextArea";
import { Subheading } from "../SubHeading";
import { SubmitButton } from "../SubmitButton";

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form
          action={action}
          onSubmit={() => {
            modalRef.current.closeModal();
          }}
        >
          <Subheading>Deixe seu comentario aqui</Subheading>
          <Textarea
            required
            rows={8}
            placeholder="Digite o comentario"
            name="text"
            id=""
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButon
        onClick={() => {
          modalRef.current.openModal();
        }}
      >
        <Chat />
      </IconButon>
    </>
  );
};
