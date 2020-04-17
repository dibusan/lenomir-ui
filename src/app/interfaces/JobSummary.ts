export interface JobSummary {
  id: number;
  success: number;
  failure: number;
  todo: number;
  website: string;
  started_at: Date;
  finished_at: Date;
}
