// import { News } from '@app/entities/News';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class NewsHttpClient {
  constructor(private httpService: HttpService) {}

  async listNews(query: string) {
    const news = await this.httpService
      .get('https://newsapi.org/v2/everything', {
        params: { q: query, apiKey: process.env.NEWS_API_KEY },
      })
      .pipe(map((response) => response.data))
      .toPromise();

    return news.articles;
  }
}
