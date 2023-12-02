import { Link, Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <div>
      <h1>DefaultLayout</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
