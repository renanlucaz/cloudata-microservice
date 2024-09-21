import { News } from '@app/entities/News';

interface RawNews {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export class HttpNewsMapper {
  static toDomain(raw: RawNews) {
    return new News({
      author: raw.author,
      content: raw.content,
      description: raw.description,
      publishedAt: raw.publishedAt,
      source: raw.source,
      title: raw.title,
      url: raw.url,
      urlToImage: raw.urlToImage,
    });
  }
}
