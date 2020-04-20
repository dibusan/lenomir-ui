import {JobSummary} from './JobSummary';

// TODO: Need to define this job record so I can create the API to match it
export interface JobRecord {
  id: number;
  url: string;
  website: string;
  duration: number;
  last_scrape_date: string;
  logs: string[];
  status: number;
  job_error: string;
  extracted_data: Extraction[];
  extracted_data_summary: ExtractedDataSummary;
}

export interface ExtractedDataSummary {
  html_table: number;
  embedded_json: number;
  xhr: number;
}

export interface Extraction {
  type: string;
  content: any;
  api_call: string;
}
