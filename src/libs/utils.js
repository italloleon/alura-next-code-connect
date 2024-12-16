import db from "../../prisma/db";
import logger from "./logger";
import { redirect } from "next/navigation";

export async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts").catch((error) => {
    logger.error("Erro de rede: " + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error("Problema ao obter os posts");
    return [];
  }
  return response.json();
}

export async function getPostsPerPage(page, searchTerm) {
  try {
    const where = {};

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 6;

    const totalPosts = await db.post.count({
      where,
    });
    const totalPages = Math.ceil(totalPosts / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      orderBy: {
        id: "desc",
      },
      include: {
        author: true,
        comments: true,
      },
      where,
      skip: (page - 1) * perPage,
    });

    return {
      data: posts,
      prev: prev,
      next: next,
    };
  } catch (error) {
    logger.error("Erro de rede: " + error.message);
    return {
      data: [],
      prev: null,
      next: null,
    };
  }
}

export async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug: slug,
      },
      include: {
        author: true,
        comments: {
          include: {
            author: true,
            children: {
              include: {
                author: true,
              },
            },
          },
          where: {
            parentId: null,
          },
        },
      },
    });

    if (!post) {
      throw new Error(`Post não encontrado: ${slug}`);
      redirect("/not-found");
    }

    return post;
  } catch (error) {
    logger.error("Erro de rede: " + error.message);
  }

  redirect("/not-found");
}
