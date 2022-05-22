import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "bigint",
  })
  user_id: number;
  @Column({
    nullable: true,
  })
  tg_username: string;
  @Column()
  nick_name: string;
  @Column()
  offer: string;
  @Column()
  person: string;
  @Column({
    nullable: true,
  })
  phones: string;
}
