import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

import { Basic } from './base.model';

@Entity()
export class User extends Basic {
    @BeforeInsert()
    public encryptPassword() {
        const passHash = crypto
            .createHmac('sha256', this.password)
            .digest('hex');
        this.password = passHash;
    }

    @PrimaryGeneratedColumn({ comment: `用户id` })
    id: number;

    @Column({ length: 50, comment: `用户名` })
    public name: string;

    @Column({
        length: 100,
        // select: false,
        default: '',
        comment: `用户密码`,
    })
    public password: string;

    @Column({ type: 'text', nullable: true, comment: `签名/描述` })
    public description: string;

    @Column({ type: 'tinyint', default: 0, comment: `已注销` })
    deleted: number;
}
