import { Link, Outlet } from "react-router-dom";

const AditionalInformation = () => {
  return (
    <>
      <h4>Aditional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default AditionalInformation;
