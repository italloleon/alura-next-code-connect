import logger from "./logger";

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

export async function getPostsPerPage(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  ).catch((error) => {
    logger.error("Erro de rede: " + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error("Problema ao obter os posts");
    return [];
  }
  return response.json();
}

export async function getPostBySlug(slug) {
  const response = await fetch(
    `http://localhost:3042/posts?slug=${slug}`
  ).catch((error) => {
    logger.error("Erro de rede: " + error.message);
    return null;
  });

  const data = await response.json();

  if (data.length === 0) {
    return {};
  }

  return data[0];
}
