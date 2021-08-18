import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teammate-row',
  templateUrl: './teammate-row.component.html',
  styleUrls: ['./teammate-row.component.scss'],
})
export class TeammateRowComponent implements OnInit {
  @Input() avatar: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() title: string;
  name: string;

  constructor() {}

  ngOnInit() {
    this.name = `${this.firstName} ${this.lastName}`;
  }
}
