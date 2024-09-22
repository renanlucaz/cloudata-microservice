import { Controller, Get, Query } from '@nestjs/common';
import { ListNewsService } from '@app/services/news/list-news.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private listNewsService: ListNewsService) {}

  @Get('')
  async getList(@Query('search') search: string) {
    const { news } = await this.listNewsService.execute({ search });

    return { news };
  }
}
