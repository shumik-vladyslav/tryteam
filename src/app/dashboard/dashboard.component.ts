import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../shared/services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars = [
  ]

  constructor(private dashboardService: DashboardService) {
    dashboardService.getInsurancePolicy().subscribe((data) => {
      console.log(data)
      this.cars = data;
    });
  }

  ngOnInit() {
  }

}
