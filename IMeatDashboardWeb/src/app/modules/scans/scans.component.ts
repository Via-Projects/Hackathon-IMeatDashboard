import { Component, OnInit, Output } from '@angular/core';
import * as charts from 'highcharts';
import { DashboardService } from 'src/app/services/dashboard.service';
import HC_exporting from 'highcharts/modules/exporting';
import { Options } from 'highcharts';
import { ScanStatisticsRecord } from 'src/app/model/ScanStatisticsRecord';
HC_exporting(charts);

@Component({
  selector: 'app-scans',
  templateUrl: './scans.component.html',
  styleUrls: ['./scans.component.scss'],
})
export class ScansComponent implements OnInit {
  scanChartOptions: Options | {};
  scanChart = charts;
  scansStatistics: void | ScanStatisticsRecord[] = [];

  constructor(private dashboardService: DashboardService) {
    this.getScanRecords();
  }

  private async getScanRecords() {
    await this.dashboardService
      .getScansData()
      .then((data) => (this.scansStatistics = data));

    this.scanChartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text:
          'Top ' +
          (<ScanStatisticsRecord[]>this.scansStatistics).length +
          ' products by scans',
      },
      subtitle: {
        text: 'Scans by endusers',
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Scans',
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: 'Scans: <b>{point.y:.1f}</b>',
      },
      series: [
        {
          color: 'rgb(24,46,123)',
          name: 'ScanStatistics',
          type: 'column',
          data: (<ScanStatisticsRecord[]>this.scansStatistics).map((record) => [
            record.name,
            record.count,
          ]),
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif',
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {
    this.scanChartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text:
          'Top ' +
          (<ScanStatisticsRecord[]>this.scansStatistics).length +
          ' products by scans',
      },
      subtitle: {
        text: 'Scans by endusers',
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Scans',
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: 'Scans: <b>{point.y:.1f}</b>',
      },
      series: [
        {
          color: 'rgb(24,46,123)',
          name: 'ScanStatistics',
          type: 'column',
          data: [],
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif',
            },
          },
        },
      ],
    };
  }
}
