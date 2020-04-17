import {JobSummary} from './JobSummary';

export interface JobRecord {
  summary: JobSummary;
  urls: UrlRecord[];
}

export interface UrlRecord {
  url: string;
  extractedData: any[];
}
