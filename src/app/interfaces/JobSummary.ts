export interface JobSummary {
  id: number;
  url: string;
  status: number;
  mime: string;
  started_at: Date;
  finished_at: Date;
}
