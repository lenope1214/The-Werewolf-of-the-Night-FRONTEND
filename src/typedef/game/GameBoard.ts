export interface CharacterOption {
  Villager: number;
  Werewolf: number;
  Seer: number;
  Robber: number;
  Troublemaker: number;
  Drunk: number;
  Insomniac: number;
  Hunter: number;
  Tanner: number;
  Mason: number;
  Minion: number;
  Doppelganger: number;
}
export default class GameBoard {
  // getter, setter
  private gameStarted: boolean = false;
  get isGameStarted() {
    return this.gameStarted;
  }
  setGameStarted(gameStarted: boolean) {
    this.gameStarted = gameStarted;
  }

  characters: CharacterOption = {
    Villager: 0,
    Werewolf: 0,
    Seer: 0,
    Robber: 0,
    Troublemaker: 0,
    Drunk: 0,
    Insomniac: 0,

    // 내가 사용할 일이 있을까 싶은 직업군
    Hunter: 0,
    Tanner: 0,
    Mason: 0,
    Minion: 0,
    Doppelganger: 0,
  };

  constructor(countOfPeople: number, characterOptions: CharacterOption) {
    let countOfOptionPeople = getCountOfOptionPeople(characterOptions);

    // 넘어온 옵션 값이 사람 수랑 다르면 기본값으로 설정
    if (countOfOptionPeople != countOfPeople) {
      countOfOptionPeople = countOfPeople > 5 ? 5 : countOfPeople;
      switch (countOfPeople) {
        case 5:
          this.characters = {
            ...this.characters,
            Insomniac: 1, // 불면증환자 1
          };
        case 4:
          this.characters = {
            ...this.characters,
            Drunk: 1, // 주정뱅이 1
          };
        case 3:
          this.characters = {
            ...this.characters,
            Werewolf: 2, // 늑대인간 2
            Seer: 1, // 예언자 1
            Robber: 1, // 강도 1
            Troublemaker: 1, // 말썽쟁이 1
            Villager: 1, // 마을주민 1
          };
          break;
      }
    }
  }

  startGame() {
    this.setGameStarted(true);
  }

  finishGame() {
    this.setGameStarted(false);
  }
}

export function getCountOfOptionPeople(countOfOptionPeople: CharacterOption) {
  if (!countOfOptionPeople) return 0;
  // countOfOptionPeople의 모든 속성의 합을 반환
  return Object.values(countOfOptionPeople).reduce((acc, cur) => acc + cur);
}
