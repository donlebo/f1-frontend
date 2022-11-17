import { Component, OnInit } from '@angular/core';
import { Article, NewsService } from '../providers/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: any;
  textToSearch: string | undefined;
  page: number = 1;

  constructor(private newsfeedservice: NewsService) { }

  async ngOnInit() {
    try {
      const news = (await this.newsfeedservice.getNews(this.page))?.articles;
      console.log(this.articles);
      this.articles = news;
      console.log(this.articles);
    } catch (error) {
      console.log(error)
    }
  }
}
