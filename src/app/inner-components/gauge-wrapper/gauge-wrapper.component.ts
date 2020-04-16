import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-gauge-wrapper',
  templateUrl: './gauge-wrapper.component.html',
  styleUrls: ['./gauge-wrapper.component.css']
})
export class GaugeWrapperComponent implements OnInit {
  view: any[] = [400, 400];
  units = 'URLs';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  @Input() single: any[];
  constructor() {
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

  ngOnInit(): void {
  }
}
