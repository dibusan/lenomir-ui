import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-wrapper',
  templateUrl: './pie-chart-wrapper.component.html',
  styleUrls: ['./pie-chart-wrapper.component.css']
})
export class PieChartWrapperComponent implements OnInit {

  single: any[];
  view: any[] = [700, 400];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    const single = [
      {
        name: 'Germany',
        value: 8940000
      },
      {
        name: 'USA',
        value: 5000000
      },
      {
        name: 'France',
        value: 7200000
      },
      {
        name: 'UK',
        value: 6200000
      }
    ];

    Object.assign(this, { single });
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
