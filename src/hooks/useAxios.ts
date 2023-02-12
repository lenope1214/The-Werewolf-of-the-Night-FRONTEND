import axios, { RawAxiosRequestHeaders } from 'axios';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '@hooks/useLocalStorage';
import { useSetRecoilState } from 'recoil';
import { loadingSelector } from '@stories/api';

type CAxiosRequestHeaders = RawAxiosRequestHeaders & {
  Authorization: string;
  'Content-Type': string;
};

export default function useAxios() {
  const navigate = useNavigate();
  // token
  const {
    getToken,
    getRefreshToken,
    setToken,
    setRefreshToken,
    clearToken,
    clearRefreshToken,
    clearUser,
  } = useLocalStorage();
  // 로딩 스피너
  const setIsLoading = useSetRecoilState(loadingSelector);

  axios.defaults.baseURL = '/api';

  // 요청 인터셉터
  axios.interceptors.request.use(
    (config) => {
      // 요청이 전달되기 전에 작업 수행

      // 로딩 스피너 표출
      setIsLoading(true);

      // 로그인, QR 조회, 토큰 재발급 요청은 헤더에 토큰 값 필요 없음
      if (
        config.url?.includes('login') ||
        config.url?.includes('qr') ||
        config.url?.includes('refresh')
      ) {
        return config;
      }

      if (config.headers) {
        config.headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        } as CAxiosRequestHeaders;
      }

      return config;
    },
    (error) => {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error);
    },
  );

  // 응답 인터셉터
  axios.interceptors.response.use(
    (response) => {
      // 응답 데이터가 있는 작업 수행

      // 로딩 스피너 숨김
      setIsLoading(false);

      return response;
    },
    async (error) => {
      const originalConfig = error.config;

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const { data, status } = await requestApi<{
            accessToken: string;
            refreshToken: string;
          }>('post', '/auth/refresh', {
            refreshToken: getRefreshToken,
          });
          if (status >= 200 && status < 400) {
            setToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            window.location.reload();
          } else {
            if (getToken()) {
              alert('장시간 미사용으로 로그아웃 되었습니다.');
              clearToken();
              clearRefreshToken();
              clearUser();
              window.location.reload();
            }
          }
        } catch (err) {
          console.log(err);
        }
      }

      // 로딩 스피너 숨김
      setIsLoading(false);

      return Promise.reject(error);
    },
  );

  const requestApi = <T extends {}>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    body?: object,
  ) => {
    return axios[method](url, body)
      .then((res) => ({
        status: res.status as number,
        message: null,
        data: res.data as T,
      }))
      .catch((err) => {
        console.error('Axios Error', err);

        return {
          status: err.response.status as number,
          message: err.response.data.message as string,
          data: {} as T,
        };
      });
  };

  return {
    requestApi,
  };
}
