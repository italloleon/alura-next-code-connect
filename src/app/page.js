import { CardPost } from "@/components/CardPost";
import style from "@/app/page.module.css";
import { getPostsPerPage } from "@/libs/utils";
import { Pagination } from "@/components/Pagination";

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page ?? 1);
  const searchTerm = searchParams?.q ?? "";
  const {
    data: posts,
    prev,
    next,
  } = await getPostsPerPage(currentPage, searchTerm);
  return (
    <main className={style.posts}>
      {posts &&
        posts.map((post, index) => <CardPost key={post.id} post={post} />)}
      <Pagination searchTerm={searchTerm} prev={prev} next={next} />
    </main>
  );
}
