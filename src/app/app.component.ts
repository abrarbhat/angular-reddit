import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { reportss } from './reportss.model';
import { tabbedReport } from './tabbedReport.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
articles: Article[];

constructor() {
  const r: tabbedReport = new tabbedReport(['First line', 'Second line'], ['Hello 2nd argumen', 'Hello 3rd argument']);
  r.run();
this.articles = [
                new Article('angular 1', 'http://foo.com/path/to/barang.io', 5), 
                new Article('angular 2', 'http://foo.com/path/to/barang.io2', 2), 
                new Article('angular 3', 'http://foo.com/path/to/barang.io3', 1) 
              ];

           
}


  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value}  and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 3));
    title.value = '';
    link.value = '';
    return false;
   }

   sortedArticles(): Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
   }
}
