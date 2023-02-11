import { myInfoState, User } from '@/typedef/domain/user/User';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouteObject,
  Routes,
  useRoutes,
} from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const Layout = () => {
  const [user, setUser] = useRecoilState<User>(myInfoState);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">메인</Link>
          </li>
          <li>{user.id ? <Link to="/wait">방 찾기</Link> : <a href=""></a>}</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
