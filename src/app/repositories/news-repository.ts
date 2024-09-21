import { News } from '@app/entities/News';

export abstract class NewsRepository {
  abstract listNews(search: string): Promise<News[]>;
}
