export interface ResearchesCardsResponse {
  data: Data;
}

export interface Data {
  items: ResearchCardItem[];
  meta: Meta;
  links: Links;
}

export interface ResearchCardItem {
  id: string;
  lastRefreshedOn: Date;
  publicTitle: string;
  primarySponsor: string;
  webAddress: string;
  views: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
