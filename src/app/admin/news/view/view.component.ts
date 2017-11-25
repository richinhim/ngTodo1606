import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../admin.service";
import {NewsVO} from "../../../domain/news.vo";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ViewDialogComponent} from "./view-dialog/view-dialog.component";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {
  news: NewsVO;

  constructor(private route: ActivatedRoute, private adminService: AdminService,
              private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const news_id = +params['news_id'];
      this.adminService.findOneNews(news_id)
        .subscribe((res: NewsVO) => {
          this.news = res;
        });
      }
    );
  }

  gotoModify(news_id: number) {
    this.router.navigateByUrl(`/admin/news/modify/${news_id}`);
  }

  confirmDelete(news: NewsVO) {
    const dialogRef = this.dialog.open(ViewDialogComponent, {data: {msg: "삭제하시겠습니까?"}});
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.adminService.removeNews(news.news_id)
          .subscribe(res => {
            if (res['result'] === 0) {
              this.snackBar.open("삭제하였습니다.", null, {duration: 3000});
              this.router.navigateByUrl('/admin/news');
            }
          });
      }
    });
  }
}
