import {Column, ManyToOne, OneToMany, PrimaryGeneratedColumn, Entity} from "typeorm";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    photo: string;
    @Column()
    name: string;
    @Column()
    info: string;
    @Column()
    age: number;
    @Column()
    kind: string;
    @Column()
    sex: string;
    @Column()
    sterilization: string;

    // @ManyToOne(() => User, (user) => user.tasks)
    // user: User;
    //
    // @OneToMany(() => Comment, (comment) => comment.task)
    // comments: Comment[];
}
