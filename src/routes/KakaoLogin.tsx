import {useEffect} from "react";
import { useSearchParams} from "react-router-dom";

const KakaoLogin = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const token: string = searchParams.get("token") || ""


    useEffect(() => {
        // 로그인 성공!!!
        // cookie에 넣고 팝업 창 닫기
        localStorage.setItem("token", token)

    }, [])

    return (
        <>
        로그인 성공 화면으로 돌아갑니다...
        </>
    )
}

export default KakaoLogin;