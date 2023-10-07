import { useRouteError, Link } from "react-router-dom";

export function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="flex h-screen	w-screen flex-col items-center justify-center">
      <h1>Oops, an unexpected error has occurred!</h1>
      <p>{error.status + " " + error.statusText}</p>
      <br />
      <p>
        <Link
          to="/"
          className="font-semibold text-violet-500 hover:text-violet-900"
        >
          Go back home
        </Link>
      </p>
    </div>
  );
}
