import { NewsItem } from './news-item.model';

export interface NewsResponse {
  _type: string;
  readLink: string;
  totalEstimatedMatches: number;
  sort: Sort[];
  value: NewsItem[];
}

export interface Sort {
  name: string;
  id: string;
  isSelected: boolean;
  url: string;
}
