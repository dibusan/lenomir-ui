import {ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../../data/data.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable, Subscription} from 'rxjs';
import {UrlSummary} from '../../interfaces/UrlSummary';
import {WebsitesSummary} from '../../interfaces/WebsiteSummary';
import {NgForm} from '@angular/forms';
import {JobSummary} from '../../interfaces/JobSummary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  totalWebsitesSummaryForLinearGauge: number;
  unitsWebsitesSummaryForLinearGauge: string;
  urlSummaryForPieChart: any;
  lastJobSummaryForGaugeChart: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.unitsWebsitesSummaryForLinearGauge = 'Websites Scraped';
    this.getUrlSummary();
    this.getWebsitesSummary();
    this.getLastJobSummary();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    for (const propName in changes) {
      // only run when property "data" changed
      if (propName === 'lastJobSummaryForGaugeChart') {
        this.lastJobSummaryForGaugeChart = changes[propName].currentValue;
      }
    }
  }

  startNewJob(f: NgForm): void {
    if (!f.valid){
      console.error(`Url ${f.value.url} is invalid`);
    }else{
      this.dataService.startNewJob(f.value.url);
    }
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

  getLastJobSummary(): void {
    this.dataService.getLastJobSummary().subscribe((sum) => {
      this.lastJobSummaryForGaugeChart = [
        {
          name: 'Success',
          value: sum.success
        },
        {
          name: 'Failure',
          value: sum.failure
        },
        {
          name: 'TODO',
          value: sum.todo
        }
      ];
    });
  }

  getUpdatedLastJobResult($event) {
    this.lastJobSummaryForGaugeChart = [
      {
        name: 'Success',
        value: $event.success
      },
      {
        name: 'Failure',
        value: $event.failure
      },
      {
        name: 'TODO',
        value: $event.todo
      }
    ];
  }
}

