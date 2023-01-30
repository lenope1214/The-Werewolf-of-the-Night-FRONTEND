import { CharacterOption } from '../game/GameBoard';
import { RoomDomain } from './Domains';

export type WaitingContainerProps = RoomDomain & {
  countOfPeople: number;
  characterOptions: CharacterOption;
};

export type IngameContainerProps = WaitingContainerProps & {};
