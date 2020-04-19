import {ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../../data/data.service';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  lastJobSummaryForGaugeChart: any[];
  urlSubmissionMessage: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getLastJobSummary();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      // only run when property "data" changed
      if (propName === 'lastJobSummaryForGaugeChart') {
        this.lastJobSummaryForGaugeChart = changes[propName].currentValue;
      }
    }
  }

  startNewJob(f: NgForm): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (f.valid){
      this.dataService.startNewJob(f.value.url);
      this.urlSubmissionMessage = `Successfully submitter url ${f.value.url}`;
    } else {
      this.urlSubmissionMessage = `Url '${f.value.url}' is invalid`;
      console.error(this.urlSubmissionMessage);
    }
    f.resetForm();
  }

  getLastJobSummary(): void {
    this.dataService.getLastJobSummary().subscribe((sum) => {
      this.lastJobSummaryForGaugeChart = [];
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

