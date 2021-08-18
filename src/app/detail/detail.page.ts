import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teammate } from '../models/teammate';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  teammate: Teammate;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.teammate =
          this.router.getCurrentNavigation().extras.state.teammate;
      }
    });
  }

  ngOnInit() {}

  setContentStyle() {
    return { 'margin-top': `${-96}px` };
  }
}
