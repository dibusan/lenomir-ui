import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-linear-gauge-wrapper',
  templateUrl: './linear-gauge-wrapper.component.html',
  styleUrls: ['./linear-gauge-wrapper.component.css']
})
export class LinearGaugeWrapperComponent implements OnInit {

  view: any[] = [400, 200];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  @Input() value: number;
  @Input() units: string;
  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }
}
