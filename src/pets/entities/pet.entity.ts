import {Column, ManyToOne, OneToMany, PrimaryGeneratedColumn, Entity} from "typeorm";
import {User} from "../../users/entities/user.entity";


export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    // @ManyToOne(() => User, (user) => user.tasks)
    // user: User;
    //
    // @OneToMany(() => Comment, (comment) => comment.task)
    // comments: Comment[];
}
