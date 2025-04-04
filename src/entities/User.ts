import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("user")
export class User extends BaseEntity {
@PrimaryGeneratedColumn()
id!: number;

@Column({
    unique: true
})
username: string;

@Column({
    unique: true
})
  email: string;

  @Column()
  passwordHash: string;

  constructor(username: string, email: string, passwordHash: string) {
    super();
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
  }


  @OneToMany(() => Post, post => post.author)
  posts!: Post[];
}