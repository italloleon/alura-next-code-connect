import Link from "next/link";

export function Pagination({ next, prev, searchTerm }) {
  return (
    <div>
      {prev && (
        <Link
          href={{
            pathname: "/",
            query: { page: prev, q: searchTerm },
          }}
        >
          Pagina anterior
        </Link>
      )}
      {next && (
        <Link
          href={{
            pathname: "/",
            query: { page: next, q: searchTerm },
          }}
        >
          Proxima pagina
        </Link>
      )}
    </div>
  );
}
