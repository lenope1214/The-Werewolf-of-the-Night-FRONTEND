import { useEffect, useState } from 'react';
import { IngameContainerProps } from '@/typedef/container/Props';
import GameBoard, { CharacterOption } from '@/typedef/game/GameBoard';

const Ingame = ({ roomId, title, countOfPeople, characterOptions }: IngameContainerProps) => {
  const gameBoard: GameBoard = new GameBoard(countOfPeople, characterOptions);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('곧 게임이 시작됩니다!');
    setInterval(() => {}, 1000);
  }, []);

  useEffect(() => {}, [message]);

  useEffect(() => {
    console.log(gameBoard);
    if (gameBoard.isGameStarted()) {
      alert('게임 시작');
    }
  }, [gameBoard.isGameStarted()]);

  return (
    <div>
      인게임 룸
      <div>
        방번호 : {roomId}
        인원 : {countOfPeople}
      </div>
      <div>
        총 토큰
        <br></br>마을주민(Villager) 3장 늑대인간(Werewolf) 2장 예언자(Seer) 1장 강도(Robber) 1장
        말썽쟁이(Troublemaker) 1장 무두장이(Tanner) 1장 주정뱅이(Drunk) 1장 사냥꾼(Hunter) 1장
        프리메이슨(Mason) 2장 불면증환자(Insomniac) 1장 하수인(Minion) 1장 도플갱어(Doppelganger)
        1장 캐릭터 토큰 16장 (각 캐릭터에 해당하는 토큰이 직업 수 만큼 있다.)
      </div>
      <br />
      <div>
        플레이어는 인원 수보다 3장이 더 많게 직업 카드를 선택한다. 선택한 카드를 뒷면인 채로 섞고 각
        플레이어에게 한 장씩 나눠 준다. 그리고 각 플레이어는 자신이 받은 직업을 확인한다. 남은 세
        장의 카드와 카드에 매치되는 토큰들은 테이블의 중앙에 놓는다. 각 플레이어는 자신의 카드를
        혼자만 보아야 하고 테이블 중앙에 있는 세 장의 카드 가까이에 자신의 카드를 뒷면으로 놓는다.
        모든 카드는 모든 플레이어의 손이 쉽게 닿을 수 있게 두어야 한다. 아래는 처음 게임을 할 때
        추천하는 직업 목록이다. 추후 게임에 익숙해 지면 원하는대로 직업 카드를 선택하면 된다. 단,
        늑대인간은 2장이 들어가도록 하며, 인원수가 많은 경우 미니언을 추가하는 것이 좋다.
        <div>3인플: 늑대인간 2명, 예언자 1명, 강도 1명, 말썽쟁이 1명, 마을주민 1명</div>
        <div>4인플: 3인플 구성에 마을주민 1명 추가</div>
        <div> 5인플: 3인플 구성에 마을주민 2명 추가</div>
      </div>
      <div>
        게임의 순서
        <div>
          <h3>
            도플갱어 - 늑대인간 - 하수인 - 하수인(도플갱어) - 비밀요원 - 예언자 - 강도 - 말썽쟁이 -
            주정뱅이 - 불면증환자 - 불면증환자(도플갱어)
          </h3>
        </div>
      </div>
      <br />
      <br />
      {/* gameBoard.characters object타입의 각 속성 정보 출력 */}
      <div>
        {Object.keys(gameBoard.characters as any).map((character: any) => {
          return (
            <div>
              {character} : {(gameBoard.characters as any)[character]}
            </div>
          );
        })}
      </div>
      <div id="message">{message}</div>
      <div id="game">
        <div id="day">밤</div>
        <div id="now">현재 차례 : {gameBoard.getNowPlayingCharacter()}</div>
      </div>
    </div>
  );
};

export default Ingame;
