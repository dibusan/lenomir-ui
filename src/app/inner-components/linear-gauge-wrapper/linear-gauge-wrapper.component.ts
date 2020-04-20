import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {WebsitesSummary} from '../../interfaces/WebsiteSummary';

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

  value: number;
  units = 'Websites Scraped';
  constructor(private dataService: DataService) {
    this.value = 0;
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.showChart();
  }

  showChart() {
    this.dataService.getWebsitesSummary().subscribe((data: WebsitesSummary) => {
      this.value = data.count;
    }, (err) => {
      console.error('Error at Website Summary component');
      console.error(err);
    });
  }
}
