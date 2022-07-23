export interface NewsItem {
  name: string;
  url: string;
  image: Image;
  description: string;
  about: About[];
  provider: Provider[];
  datePublished: Date;
  category: string;
}

export interface About {
  readLink: string;
  name: string;
}

export interface Image {
  thumbnail: Thumbnail;
}

export interface Provider {
  _type: string;
  name: string;
  image: { thumbnail: Thumbnail };
}

export interface Thumbnail {
  contentUrl: string;
  width: number;
  height: number;
}
