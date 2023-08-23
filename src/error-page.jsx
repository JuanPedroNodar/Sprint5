import { useRouteError } from "react-router-dom";
import icon from "../public/blinking-eyes-man.gif";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ERROR 404</h1>
      <img src={icon} />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
