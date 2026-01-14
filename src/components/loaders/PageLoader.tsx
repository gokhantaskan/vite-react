import Spinner from "../ui/Spinner/Spinner";

export function PageLoader() {
  return (
    <div className="u-flex-center-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <Spinner />
        <p className="m-0 text-lg u-text-muted">Loading</p>
      </div>
    </div>
  );
}
