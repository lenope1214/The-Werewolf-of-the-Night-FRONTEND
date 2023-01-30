const name_kr = '도플갱어';
const name_en = 'doppelganger';
const name = {
  name_kr,
  name_en,
};

const skill_kr = `
차례가되면 다른 캐릭터를 보고 그 캐릭터의 능력을 복제한다.
그리고 복제한 캐릭의 팀에 소속된다. 예언자, 강도, 말썽쟁이, 주정뱅이가 됐을 시 바로 그 능력을 사용한다.
불면증환자를 복제했을때는 마지막 불면증환자 다음에 자기 직업을 확인한다.
`;
const skill_en = `
When it's your turn, you look at another character and replicate the character's abilities.
And belongs to Carrick's team who copied it. When you become a prophet, a robber, a troublemaker, or a drunkard, you use that ability.
When cloning an insomniac, check his job after the last insomniac.
`;
const skill = {
  skill_kr,
  skill_en,
};

export default {
  name,
  skill,
};
