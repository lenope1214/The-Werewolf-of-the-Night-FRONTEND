import { User, myInfoState } from '@/typedef/domain/user/User';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const header = document;
  const [user, setUser] = useRecoilState<User>(myInfoState);
  const token: string = searchParams.get('token') || '';

  //react router dom으로 header값 가져오기
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // 로그인 성공!!!

    // 서버로부터 자신의 정보를 조회해온다.
    
  }, [token]);

  return <>{token ? <div>로그인 중...</div> : <div>로그인 성공 화면으로 돌아갑니다...</div>}</>;
};

export default KakaoLogin;
