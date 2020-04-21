import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  whatThisIs = 'Scalable platform to create comprehensive databases from structured information in\n' +
    'websites for marketing and AI research.';
  howItWorks  = [
    'Start a new scraping job in the dashboard by entering a web page\'s url.',
    'The historic table should reflect a summary of the ongoing job.',
    'The job will extract all Embedded Json in the page, as well as API calls it made and parse HTML tables.',
    'Click on the Job row to see the extracted data and other details'
  ];
  links = [
    {
      link: 'https://example.com',
      icon: 'facebook',
      label: 'Facebook'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
