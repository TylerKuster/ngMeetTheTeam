import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Teammate } from '../models/teammate';
import CAT_TEAM from '../services/team-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  theTeam: Array<Teammate> = CAT_TEAM();

  constructor(private router: Router) {
    console.log('CAT_TEAM', this.theTeam[0]);
  }

  didTapTeammateAtRow(index: number) {
    this.router.navigateByUrl('/detail', {
      state: { teammate: this.theTeam[index] },
    });
  }
}
