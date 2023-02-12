import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import KakaoLogin from '@/routes/KakaoLogin';
import Layout from './routes/Layout';

const tempData: { ownerId: string; title: string; countOfPeople: number; roomId: number } = {
  roomId: 1,
  ownerId: '1251251253234ieufaduf',
  title: '대기실 제목',
  countOfPeople: 5,
};
const App = () => {
  //   const routes: RouteObject[] = [
  //     {
  //       path: '/',
  //       element: <Layout />,
  //       children: [
  //         {
  //           index: true,
  //           element: <Index />,
  //         },
  //         {
  //           path: '/kakaoLogin',
  //           element: <KakaoLogin />,
  //         },
  //         {
  //           path: '/waiting/:roomId',
  //           element: (
  //             <Waiting
  //               title={tempData.title}
  //               countOfPeople={tempData.countOfPeople}
  //               roomId={tempData.roomId}
  //               ownerId={tempData.ownerId}
  //               characterOptions={getDefaultCharacterOptions}
  //             />
  //           ),
  //         },
  //         {
  //           path: 'ingame/:roomId',
  //           element: (
  //             <Ingame
  //               title={tempData.title}
  //               countOfPeople={tempData.countOfPeople}
  //               roomId={tempData.roomId}
  //               ownerId={tempData.ownerId}
  //               characterOptions={getDefaultCharacterOptions}
  //             />
  //           ),
  //         },
  //       ],
  //     },
  //   ];

  //   const element = useRoutes(routes);

  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/kakaoLogin" element={<KakaoLogin />} />

          {/* {element} */}
        </Routes>
      </RecoilRoot>
    </>
  );
};

export default App;
