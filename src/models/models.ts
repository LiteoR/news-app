export interface ArticleModel {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceModel;
  title: string;
  url: string;
  urlToImage: string;
}

interface SourceModel {
  id: any;
  name: string;
}
