import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface RootObject {
  status: string;
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  host: string = 'https://newsapi.org/v2/';
  apiKey: string = 'ae3ff1a905174dc49623365f5e94a598';

  constructor(private http: HttpClient) { }

  getNews(page: number) {
    return this.http.get<RootObject>(`${this.host}/everything?q=f1&apiKey=${this.apiKey}&page=${page}`).toPromise();
  }
}
