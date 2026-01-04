import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Goal } from "./goal";

@Entity()
export class Snapshot {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "date" })
    date!: string;

    @Column({ type: "decimal", precision: 5, scale: 2 })
    value!: number; // The recorded weight at this date

    @ManyToOne(() => Goal, (goal) => goal.snapshots, { onDelete: "CASCADE" })
    goal!: Goal;
}