interface PaginationType {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
}

export interface MovieType {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  poster: string;
  description: string;
  director: string;
  actors: number[];
}

export interface MovieResponseType extends PaginationType {
  data: MovieType[];
}
