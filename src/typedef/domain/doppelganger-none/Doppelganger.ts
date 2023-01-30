import { isKorean } from '@/libs/CommonFuncs';
import property from './DoppelgangerProperties';
import Character from '../Character';
import CitizenTeam from '@/typedef/team/CitizensTeam';

export const DoppelgangerMaxCount = 3;

export default class Doppelganger extends CitizenTeam implements Character {
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
