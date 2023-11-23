import { Controller, Get, Query } from '@nestjs/common';

import { BaseController } from '@/modules/restful/base';
import { Crud } from '@/modules/restful/decorators';

import { CreateArticleDto, QueryArticleDto, UpdateArticleDto } from '../dto';
import { ArticleService } from '../service';

@Crud({
    id: 'article',
    enabled: ['list', 'detail', 'store', 'update', 'delete', 'restore'],
    dtos: {
        store: CreateArticleDto,
        update: UpdateArticleDto,
        list: QueryArticleDto,
    },
})
@Controller('article')
export class ArticleController extends BaseController<ArticleService> {
    constructor(protected service: ArticleService) {
        super(service);
    }

    /**
     * 获取md文件数据
     */
    @Get('getMdFileData')
    getMdFileData(@Query('fileName') fileName: string) {
        return this.service.getMdFileData(fileName);
    }
}
