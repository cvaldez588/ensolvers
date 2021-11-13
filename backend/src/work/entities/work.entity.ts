import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Work {
    @PrimaryGeneratedColumn()
    work_id: number;

    @Column()
    description: string;

    @Column()
    mark: boolean;
    
    @Column()
    folder_id: number;

    @UpdateDateColumn()
    last_update: Date;
}