import { WaitingContainerProps } from '@/typedef/container/Props';

const Waiting = ({ title, countOfPeople }: WaitingContainerProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>인원 수 : {countOfPeople}</div>
      <a href="https://namu.wiki/w/%ED%95%9C%EB%B0%A4%EC%9D%98%20%EB%8A%91%EB%8C%80%EC%9D%B8%EA%B0%84">
        나무위키로 이동하기{' '}
      </a>
      <div>3 ~ 10명 (긱기준:4-10인, 6-8인 추천)</div>
      <div>
        <a href="/ingame/1">시작하기</a>
      </div>
    </div>
  );
};

export default Waiting;
