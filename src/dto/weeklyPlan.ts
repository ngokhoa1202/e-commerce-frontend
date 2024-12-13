import { UUID } from 'crypto';

/* Curriculum is weekly-plan */
export interface WeeklyPlan {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  weekNumber: number;
  topic: string;
  description: string;
}


