export interface UserType {
  user_id: number;
  tg_username: string;
  offer: string;
  paerson: string;
  phones: string;
  nick_name: string;
}
export interface Session {
  user: UserType;
  route: string;
}
