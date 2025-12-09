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
   <div className="notFound container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
  <h1 className="text-4xl font-bold ">{errorStatus}</h1>
  <p className="text-lg mt-2">{errorStatusText}</p>
  <Link to="/" replace={true} className="text-blue-500 underline mt-4 inline-block">
    How about going back to safety?
  </Link>
</div>
  )
}

export default Error