import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

import { BoolBitTransformer } from '@/modules/core/helpers/utils';
import { BaseEntity } from '@/modules/database/base/entity';

@Entity('article', { schema: 'article' })
export class ArticleEntity extends BaseEntity {
    @Column('varchar', {
        name: 'title',
        nullable: true,
        comment: '标题',
        length: 128,
    })
    title: string | null;

    @Column('varchar', {
        name: 'title_eng',
        nullable: true,
        comment: '英文标题',
        length: 255,
    })
    titleEng: string | null;

    @Column('varchar', {
        name: 'classes',
        nullable: true,
        comment: '分类',
        length: 32,
    })
    classes: string | null;

    @Column('varchar', {
        name: 'url',
        nullable: true,
        comment: '链接',
        length: 128,
    })
    url: string | null;

    @Column('json', { name: 'tags', nullable: true, comment: '标签JSON数组' })
    tags: object | null;

    @Column('bit', {
        name: 'post',
        nullable: true,
        comment: '发布状态。true：已发布，false：草稿',
        transformer: new BoolBitTransformer(),
    })
    post: boolean | null;

    @Column('datetime', {
        name: 'posted_at',
        nullable: true,
        comment: '发布时间',
    })
    postedAt: Date | null;

    @Column('varchar', {
        name: 'summary',
        nullable: true,
        comment: '概要',
        length: 255,
    })
    summary: string | null;

    @Column('bit', {
        name: 'state',
        nullable: true,
        comment: '状态',
        transformer: new BoolBitTransformer(),
    })
    state: boolean | null;

    @DeleteDateColumn({
        name: 'deleted_at',
        nullable: true,
        comment: '删除时间',
    })
    deletedAt: Date | null;

    @CreateDateColumn({
        name: 'created_at',
        nullable: true,
        comment: '创建时间',
    })
    createdAt: Date | null;

    @Column('bigint', { name: 'created_by', nullable: true, comment: '创建人' })
    createdBy: number | null;

    @UpdateDateColumn({
        name: 'updated_at',
        nullable: true,
        comment: '修改时间',
    })
    updatedAt: Date | null;

    @Column('bigint', { name: 'updated_by', nullable: true, comment: '修改人' })
    updatedBy: number | null;
}
