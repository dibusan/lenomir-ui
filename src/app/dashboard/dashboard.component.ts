import { Component, OnInit } from '@angular/core';
import {DataService} from '../data/data.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {UrlSummary} from '../UrlSummary';
import {WebsitesSummary} from '../WebsiteSummary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalWebsitesSummaryForLinearGauge: number;
  unitsWebsitesSummaryForLinearGauge: string;
  urlSummaryForPieChart: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.unitsWebsitesSummaryForLinearGauge = 'Websites Scraped';
    this.unitsWebsitesSummaryForLinearGauge = 'DDDDD';
    this.getUrlSummary();
    this.getWebsitesSummary();
  }

  getUrlSummary(): void {
    this.dataService.getUrlSummary().subscribe((sum) => {
      this.urlSummaryForPieChart = [
        {
          name: 'Marketable',
          value: sum.marketable
        },
        {
          name: 'Clean',
          value: sum.clean
        },
        {
          name: 'Analyzing',
          value: sum.analyzing
        }
      ];
    });
  }

  getWebsitesSummary(): void {
    this.dataService.getWebsitesSummary().subscribe((sum) => {
      this.totalWebsitesSummaryForLinearGauge = sum.total;
    });
  }

}

