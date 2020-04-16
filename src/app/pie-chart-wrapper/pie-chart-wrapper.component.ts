import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie-chart-wrapper',
  templateUrl: './pie-chart-wrapper.component.html',
  styleUrls: ['./pie-chart-wrapper.component.css']
})
export class PieChartWrapperComponent implements OnInit {
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

  @Input() single: any[];
  constructor() {
  }

  ngOnInit(): void {
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
