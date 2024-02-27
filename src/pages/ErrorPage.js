import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div id="error-page" className="flex-center">
      <div className="basic-card align-column">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={goBack}>back</button>
      </div>
    </div>
  );
}
