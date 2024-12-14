import { getPostBySlug } from "@/libs/utils";

export default async function PostsPage({ params }) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  return <h1>{post.title}</h1>;
}
