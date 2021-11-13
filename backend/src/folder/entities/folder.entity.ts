import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Folder {
    @PrimaryGeneratedColumn()
    folder_id: number;

    @Column()
    description: string;
    
    @UpdateDateColumn()
    last_update: Date;
}