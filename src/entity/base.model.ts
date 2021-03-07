import {
    Entity,
    Column,
    BeforeInsert,
    BeforeUpdate,
    AfterInsert,
} from 'typeorm';

@Entity()
export abstract class Basic {
    @Column({
        comment: `最近更新时间`,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @Column({
        comment: `创建时间`,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;
}
