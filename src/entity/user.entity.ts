import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn() // 自增列，如果只要主键列只需要用 PrimaryColumn
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100 })
    password: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'bigint' })
    createdAt: number;

    @Column({ type: 'bigint' })
    updatedAt: number;

    @Column({ type: 'tinyint', default: 0 })
    deleted: number;
}
