import { Entity,BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("posts        ")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title: string;

  @Column("text")
  content: string;

  @ManyToOne(() => User, user => user.posts)
  author: User;
  
  constructor(title: string, content: string, author: User) {
    super();
    this.title = title;
    this.content = content;
    this.author = author;
  }
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}