import { Injectable } from '@angular/core';
import {UrlSummary} from '../UrlSummary';
import {Observable, of} from 'rxjs';
import {WebsitesSummary} from '../WebsiteSummary';

@Injectable({
  providedIn: 'root',
})export class DataService {

  WEBSITES_SUMMARY: WebsitesSummary = {
    total: 25
  };

  URL_SUMMARY: UrlSummary = {
    marketable: 3,
    clean: 19,
    analyzing: 76
  };

  constructor() {
  }

  getUrlSummary(): Observable<UrlSummary> {
    return of<UrlSummary>(this.URL_SUMMARY);
  }

  getWebsitesSummary(): Observable<WebsitesSummary> {
    return of<WebsitesSummary>(this.WEBSITES_SUMMARY);
  }

  addURL(url) {
    this.URL_SUMMARY.analyzing += 1;
  }

}
