import { isKorean } from '@/libs/CommonFuncs';
import property from './WerewolfProperties';
import Character from '../Character';
import WolfTeam from '@/typedef/team/WolfTeam';

export const WerewolfMaxCount = 2;

export default class Werewolf extends WolfTeam implements Character {
  name: string;
  skill: string;

  constructor(language: string = 'KR') {
    super(language);
    this.name = isKorean(language) ? property.name.name_kr : property.name.name_en;
    this.skill = isKorean(language) ? property.skill.skill_kr : property.skill.skill_en;
  }

  doSkill(): string {
    return this.skill;
  }
}
