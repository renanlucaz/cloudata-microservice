import { News } from '@app/entities/News';
import { Injectable } from '@nestjs/common';

export abstract class NewsExternalService {
  abstract listNews(search: string): Promise<News[]>;
}

interface ListNewsServiceRequest {
  search: string;
}

interface ListNewsServiceResponse {
  news: News[];
}

@Injectable()
export class ListNewsService {
  constructor(private newsExternalService: NewsExternalService) {}

  async execute({
    search,
  }: ListNewsServiceRequest): Promise<ListNewsServiceResponse> {
    const news = await this.newsExternalService.listNews(search);

    return { news };
  }
}
