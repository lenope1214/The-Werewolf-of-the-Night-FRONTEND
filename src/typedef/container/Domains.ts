/**
 * roomId : 방 번호 인덱스
 * title : 방 제목
 * ownerId : 방장 유저 UUID
 */
export type RoomDomain = {
  roomId: number;
  title: string;
  ownerId: string;
};
