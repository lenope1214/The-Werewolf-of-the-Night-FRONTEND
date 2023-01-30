import { isKorean } from '@/libs/CommonFuncs';
import Team from './Team';

export default class CitizenTeam implements Team {
  winCondition: string;

  constructor(language: string = 'KR') {
    this.winCondition = isKorean(language)
      ? CitizenTeamWinCondition_kr
      : CitizenTeamWinCondition_en;
  }
}

const CitizenTeamWinCondition_kr = `
  1. 늑대인간이 존재하는 경우: 늑대인간이 하나 이상 죽어야 한다.
  2. 늑대인간이 존재하지 않는 경우: (서로에게 1표씩 투표하여서) 아무도 죽지 않아야 한다.
  3. 무두장이의 사망 여부는 마을 팀의 승리 여부와 무관하다.
`;
const CitizenTeamWinCondition_en = `
  1. If a werewolf exists: at least one werewolf must die.
  2. Where werewolves do not exist: no one should die (by voting for each other).
  3. The death of the tanner is irrelevant to the victory of the village team.
`;
