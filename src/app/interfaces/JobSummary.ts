export interface JobSummary {
  id: number;
  url: string;
  last_scrape_status: number;
  mime: string;
  created_at: Date;
  updated_at: Date;
}
