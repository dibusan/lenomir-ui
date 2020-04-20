import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Url} from 'url';
import {UrlSummary} from '../../interfaces/UrlSummary';
import {URL_SUMMARY} from '../../services/data/constant';
import {Observable, of, Subject} from 'rxjs';
import {IntervalObservable} from 'rxjs-compat/observable/IntervalObservable';
import 'rxjs-compat/add/operator/takeWhile';

@Component({
  selector: 'app-pie-chart-wrapper',
  templateUrl: './pie-chart-wrapper.component.html',
  styleUrls: ['./pie-chart-wrapper.component.css']
})
export class PieChartWrapperComponent implements OnInit, OnDestroy {
  view: any[] = [400, 200];

  // options
  label = 'Total URLs scraped';
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  pieChartData = [
    {
      name: 'Marketable',
      value: 0
    },
    {
      name: 'Clean',
      value: 0
    },
    {
      name: 'Analyzing',
      value: 0
    }
  ];
  private alive: boolean;
  constructor(private dataService: DataService) {
    this.alive = true;
  }

  ngOnInit(): void {
    this.showChart();
    // IntervalObservable.create(3000)
    //   .takeWhile(() => this.alive) // only fires when component is alive
    //   .subscribe(() => {
    //     this.showChart();
    //   });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  showChart() {
    this.dataService.getUrlSummary().subscribe(
      (data: UrlSummary) => {
        this.pieChartData = [
          {
            name: 'Marketable',
            value: data.marketable
          },
          {
            name: 'Clean',
            value: data.clean
          },
          {
            name: 'Analyzing',
            value: data.analizing
          }
        ];
      }, (err) => {
        console.warn('Error ar pieChar:showChart()');
        console.error(err);
      },
      () => {
        console.log('finished call to showChart()');
      }
    );
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
