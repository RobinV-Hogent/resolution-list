import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Snapshot } from "./snapshot";

@Entity()
export class Goal {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ type: "decimal", precision: 5, scale: 2 })
    value!: number;

    @OneToMany(() => Snapshot, (snapshot) => snapshot.goal)
    snapshots!: Snapshot[];
}