import { Component, OnInit } from '@angular/core';
import { Meat } from 'src/app/model/Meat';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public meat: Meat = {
    name: '',
    age: 0,
  };

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.getMeat();
  }

  getMeat(): void {
    this.service
      .getData()
      .toPromise()
      .then((meat) => {
        this.meat = meat;
      });
  }
}
