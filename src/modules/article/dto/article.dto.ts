import { PartialType } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator';

import { DtoValidation } from '@/modules/core/decorators';

import { ListWithTrashedQueryDto } from '@/modules/restful/dtos';
import { PublicOrderType } from '@/modules/system/constants';

/**
 * 分页查询验证
 */
@DtoValidation({ type: 'query' })
export class QueryArticleDto extends ListWithTrashedQueryDto {
    @IsEnum(PublicOrderType, {
        message: `排序规则必须是${Object.values(PublicOrderType).join(',')}其中一项`,
    })
    @IsOptional()
    orderBy?: PublicOrderType;

    @IsOptional()
    title?: string;

    @IsOptional()
    classes?: string;

    @IsOptional()
    tags?: string;
}

/**
 * 创建验证
 */
@DtoValidation({ groups: ['create'] })
export class CreateArticleDto {
    @IsNumber(undefined, { groups: ['update'], message: '博客ID格式错误' })
    @IsDefined({ groups: ['update'], message: '博客ID必须指定' })
    id!: number;

    @IsDefined({ groups: ['create'], message: '标题必须传递' })
    title: string;

    @IsDefined({ groups: ['create', 'update'], message: '文件内容必须传递' })
    content: string;

    /**
     * 状态，用于在create时赋初始值
     */
    state: boolean;

    /**
     * 发布状态，用于在create时赋初始值
     */
    post: boolean;
}

/**
 * 更新验证
 */
@DtoValidation({ groups: ['update'] })
export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @IsDefined({ groups: ['update'], message: '文件名称必须传递' })
    fileName: string;
}
