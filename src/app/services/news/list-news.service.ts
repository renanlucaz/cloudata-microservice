import { News } from '@app/entities/News';
import { NewsRepository } from '@app/repositories/news-repository';
import { Injectable } from '@nestjs/common';

interface ListNewsServiceRequest {
  search: string;
}

interface ListNewsServiceResponse {
  news: News[];
}

@Injectable()
export class ListNewsService {
  constructor(private newsRepository: NewsRepository) {}

  async execute({
    search,
  }: ListNewsServiceRequest): Promise<ListNewsServiceResponse> {
    const news = await this.newsRepository.listNews(search);

    return { news };
  }
}
