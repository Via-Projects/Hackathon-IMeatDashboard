import { Component, OnInit } from '@angular/core';
import * as charts from 'highcharts';
import { ConsumerPreferences } from 'src/app/model/ConsumerPreferences';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Options } from 'highcharts';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  pieChartOptions: Options | {};
  pieChart = charts;
  preferencesStatistics: void | ConsumerPreferences[] = [];

  constructor(private dashboardService: DashboardService) {
    this.getConsumerPreferences();
  }

  private async getConsumerPreferences() {
    await this.dashboardService
      .getPreferencesData()
      .then((data) => (this.preferencesStatistics = data));

    this.pieChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Products prefered by consumers',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Preferences',
          colorByPoint: true,
          type: 'pie',
          data: (<ConsumerPreferences[]>(
            this.preferencesStatistics
          )).map((preference) => [preference.name, preference.percentage]),
        },
      ],
    };
  }

  ngOnInit(): void {
    this.pieChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Products prefered by consumers',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Preferences',
          colorByPoint: true,
          type: 'pie',
          data: [],
        },
      ],
    };
  }
}
