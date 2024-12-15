import { CardPost } from "@/components/CardPost";
import { getPostBySlug } from "@/libs/utils";
import styles from "./page.module.css";

export default async function PostsPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      {post.markdown && (
        <div className={styles.code}>
          <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
      )}
    </div>
  );
}
