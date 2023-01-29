import { RoomDomain } from './Domains';

export type WaitingContainerProps = RoomDomain & {
  countOfPeople: number;
};

export type IngameContainerProps = WaitingContainerProps & {};
