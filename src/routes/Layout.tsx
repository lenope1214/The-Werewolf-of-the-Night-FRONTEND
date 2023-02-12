import { myInfoState, User } from '@/typedef/domain/user/User';
import { useState, useEffect } from 'react';
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
  const [popup, setPopup] = useState<Window>();

  const handleOpenPopup = () => {
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const popup = window.open(
      '/oauth2/authorization/kakao',
      '로그인 중...',
      `width=${width},height=${height},left=${left},top=${top}`,
    );
    popup && setPopup(popup);
  };

  useEffect(() => {
    if (!popup) {
      return;
    }

    const timer = setInterval(() => {
      if (!popup) {
        timer && clearInterval(timer);
        return;
      }
      const currentUrl = popup.location.href;
      if (!currentUrl) {
        return;
      }
      const searchParams = new URL(currentUrl).searchParams;
      const code = searchParams.get('code');
      if (code) {
        popup.close();
        console.log(`The popup URL has URL code param = ${code}`);
        // 가져온 code 로 다른 정보를 가져오는 API 호출
      }
    }, 500);
  }, [popup]);

  // user이 변경됐을때 user정보 변경출력
  useEffect(() => {
    if (user.id) {
      alert('user :', user.id, user.name);
    }
  }, [user]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">메인</Link>
            <a onClick={handleOpenPopup}>카카오로그인하기</a>
          </li>
          <li>{user.id ? <Link to="/wait">방 찾기</Link> : <a href=""></a>}</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
