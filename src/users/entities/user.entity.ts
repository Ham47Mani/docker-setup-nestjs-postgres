import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// ====================== Start User Entity ======================
@Entity({name: "users"})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({nullable: false})
  firstName: string;

  @Column({nullable: false})
  lastName: string;
}
// ====================== End User Entity ======================

