import { Link ,useRouteError, isRouteErrorResponse} from "react-router-dom"
import '@styles/globals.css'

function Error() {
     const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-7xl font-extrabold text-gray-900">{errorStatus}</h1>
      <p className="text-lg mt-3 text-gray-500">{errorStatusText}</p>
      <Link
        to="/"
        replace={true}
        className="mt-8 inline-flex items-center bg-gray-900 text-white font-semibold text-sm px-6 py-3 rounded-full transition-transform hover:scale-105"
      >
        Back to safety
      </Link>
    </div>
  )
}

export default Error