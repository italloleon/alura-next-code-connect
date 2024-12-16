import Image from "next/image";
import { Avatar } from "../Avatar";
import style from "./cardpost.module.css";
import Link from "next/link";
import { IconButon } from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
import { incrementThumbsUp, postComment } from "@/actions";
import { ModalComment } from "../ModalComment";

export const CardPost = ({ post, highlight }) => {
  const highlighted = highlight ? style.highlight : "";

  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitCommentPost = postComment.bind(null, post);

  return (
    <article className={`${style.cardpost} ${highlighted}`}>
      <header className={style.header}>
        <figure className={`${style.figure} ${highlighted}`}>
          <Image
            className={`${style.image} ${highlighted}`}
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post: ${post.title}`}
          />
        </figure>
      </header>
      <section className={style.body}>
        <h2 className={style.title}>{post.title}</h2>
        <p className={style.content}>{post.body}</p>
        {!highlight && (
          <Link className={style.link} href={`/posts/${post.slug}`}>
            Ver post
          </Link>
        )}
      </section>
      <footer className={style.footer}>
        <div className={style.actions}>
          <div>
            <form action={submitThumbsUp}>
              <IconButon>
                <ThumbsUp />
              </IconButon>
            </form>
            <p className={style.count}>{post.likes}</p>
          </div>
          <div>
            <ModalComment action={submitCommentPost} />
            <p className={style.count}>{post.comments.length}</p>
          </div>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
