import Image from "next/image";
import { Avatar } from "../Avatar";
import style from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post }) => {
  return (
    <article className={style.cardpost}>
      <header className={style.cardpost__header}>
        <figure className={style.cardpost__figure}>
          <Image
            className={style.cardpost__image}
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post: ${post.title}`}
          />
        </figure>
      </header>
      <section className={style.cardpost__body}>
        <h2 className={style.cardpost__title}>{post.title}</h2>
        <p className={style.cardpost__content}>{post.body}</p>
        <Link className={style.cardpost__link} href={`/posts/${post.slug}`}>
          Ver post
        </Link>
      </section>
      <footer className={style.cardpost__footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
