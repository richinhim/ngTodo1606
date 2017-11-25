import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AdminService} from "../admin.service";
import {ResultVO} from "../../domain/result.vo";
import {PageVO} from "../../domain/page.vo";
import {NewsVO} from "../../domain/news.vo";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  newsList = new Array<NewsVO>();
  page = new PageVO(0, 5);

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    // 글쓰기, 삭제 수정을 마치고 돌아오면 목록을 리프레쉬해야 한다.
    this.router.events.subscribe(events => {
      console.log(events);
// 부모, 자식 경로가 호출될때마다 여러가지 이벤트 발생. NavigationStart -> NavigationReconized -> NavigationEnd
      if (events instanceof NavigationStart) {
        console.log('nagigation start:' + events.url);
        if (events.url === '/admin/news') {
          this.findNews();
        }
      }
    });
    this.findNews();
  }

  findNews() {
    const page = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    };
    this.adminService.findNews(page)
      .subscribe((result: ResultVO) => {
        console.log(result);
        this.newsList = result.data;
        this.page.totalCount = result.total;
      });
  }

  pageChanged(event: any) {
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.findNews();
  }

  gotoView(news: NewsVO) {
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
  }

  gotoWrite() {
    this.router.navigateByUrl(`/admin/news/write`);
  }
}
