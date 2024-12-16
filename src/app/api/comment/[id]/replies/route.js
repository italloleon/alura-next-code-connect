import db from "../../../../../../prisma/db";

export async function GET(request, { params }) {
  const id = (await params).id;
  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(id),
    },
    include: {
      author: true,
    },
  });
  return Response.json(replies);
}
