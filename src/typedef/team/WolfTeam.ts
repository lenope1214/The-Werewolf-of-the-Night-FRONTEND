import { isKorean } from '@/libs/CommonFuncs';
import Team from './Team';

export default class WolfTeam implements Team {
  winCondition: string;

  constructor(language: string = 'KR') {
    this.winCondition = isKorean(language) ? WolfTeamWinCondition_kr : WolfTeamWinCondition_en;
  }
}

const WolfTeamWinCondition_kr = `
  1. 늑대인간 중 누구도 죽지 않는다.
  2. 무두장이가 존재하는 경우, 무두장이는 살아있어야 한다.
  3. 하수인이 혼자 존재하는 경우, 누군가는 죽어야 하며 하수인은 살아있어야 한다.
`;
const WolfTeamWinCondition_en = `
  1. None of the werewolves die.
  2. If a tanner exists, the tanner must be alive.
  3. If a subcontractor exists alone, someone must die and the subcontractor must be alive.
`;
