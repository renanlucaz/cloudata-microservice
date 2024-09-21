interface NewsProps {
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

export class News {
  private props: NewsProps;

  constructor(props: NewsProps) {
    this.props = { ...props };
  }

  get source(): { id: string; name: string } {
    return this.props.source;
  }

  get author(): string {
    return this.props.author;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get url(): string {
    return this.props.url;
  }

  get urlToImage(): string {
    return this.props.urlToImage;
  }

  get publishedAt(): string {
    return this.props.publishedAt;
  }

  get content(): string {
    return this.props.content;
  }

  set source(source: { id: string; name: string }) {
    this.props.source = source;
  }

  set author(author: string) {
    this.props.author = author;
  }

  set title(title: string) {
    this.props.title = title;
  }

  set description(description: string) {
    this.props.description = description;
  }

  set url(url: string) {
    this.props.url = url;
  }

  set urlToImage(urlToImage: string) {
    this.props.urlToImage = urlToImage;
  }

  set publishedAt(publishedAt: string) {
    this.props.publishedAt = publishedAt;
  }

  set content(content: string) {
    this.props.content = content;
  }
}
