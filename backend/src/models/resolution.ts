import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Resolution {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    goal!: string;

    @Column()
    name?: string;
}