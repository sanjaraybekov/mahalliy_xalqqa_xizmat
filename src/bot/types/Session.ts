export interface UserType {
  user_id: number;
  firstName: string;
  userName: string;
  shaxsi: string;
  taklif: string;
}
export interface Session {
  user: UserType;
  route: string;
}
