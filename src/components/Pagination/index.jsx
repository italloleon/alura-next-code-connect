import Link from "next/link";

export function Pagination({ next, prev }) {
  return (
    <div>
      {prev && <Link href={`/?page=${prev}`}>Pagina anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Proxima pagina</Link>}
    </div>
  );
}
