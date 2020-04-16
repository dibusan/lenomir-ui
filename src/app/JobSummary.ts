export interface JobSummary {
  success: number;
  failure: number;
  todo: number;
  website: string;
  started_at: Date;
  finished_at: Date;
}
