import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.response) {
    if (error.response.status === 401) {
      return (
        <>
          <h1>DO BETTER</h1>
          <p>You must be logged in to do that.</p>
          <Link to="/">Click here to go back to the homepage</Link>
        </>
      );
    }
  }

  return (
    <>
      <h1>WHY DO  YOU DO THIS</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default ErrorPage;
