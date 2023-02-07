import { RoomDomain } from './Domains';
import {CharacterOption} from "@/typedef/game/CharacterOption";

export type WaitingContainerProps = RoomDomain & {
  countOfPeople: number;
  characterOptions: CharacterOption
};

export type IngameContainerProps = WaitingContainerProps & {};
