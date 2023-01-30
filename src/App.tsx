import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouteObject,
  useRoutes,
} from 'react-router-dom';
import './App.css';
import Images from './assets/Images';
import ErrorPage from './routes/ErrorPage';
import Index from './routes/Index';
import Ingame from './routes/Ingame';
import Waiting from './routes/Waiting';
import { WaitingContainerProps } from './typedef/container/Props';

// function App() {
//   return (
//     <div className="App">
//       <img src={Images.logo} />
//       <div> 한밤의 늑대인간 </div>
//       <div>카카오로 시작하기</div>
//       <img src={Images.kakaoLoginImg} id="kakao_login"></img>
//     </div>
//   );
// }

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">메인</Link>
          </li>
          <li>
            <Link to="/wait">방 찾기</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

const tempData: WaitingContainerProps = {
  roomId: 1,
  ownerId: '1251251253234ieufaduf',
  title: '대기실 제목',
  countOfPeople: 5,
};
const App = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: '/waiting/:roomId',
          element: (
            <Waiting
              title={tempData.title}
              countOfPeople={tempData.countOfPeople}
              roomId={tempData.roomId}
              ownerId={tempData.ownerId}
            />
          ),
        },
        {
          path: 'ingame/:roomId',
          element: (
            <Ingame
              title={tempData.title}
              countOfPeople={tempData.countOfPeople}
              roomId={tempData.roomId}
              ownerId={tempData.ownerId}
            />
          ),
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return <>main{element} </>;
};

export default App;
