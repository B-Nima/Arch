export interface Athlete {
  id: string;
  name: string;
  region: string;
  category: string;
  rank: string;
  avgScore: number;
  bestScore: number;
  totalCompetitions: number;
  trend: 'up' | 'down' | 'stable';
  coach: string;
}

export interface Competition {
  id: string;
  name: string;
  date: string;
  location: string;
  type: string;
  participants: number;
  status: 'completed' | 'ongoing' | 'upcoming';
}

export interface CoachMetrics {
  id: string;
  name: string;
  athletes: number;
  avgProgress: number;
  winRate: number;
  specialties: string[];
  rating: number;
}

export interface TrainingModel {
  id: string;
  name: string;
  description: string;
  phases: TrainingPhase[];
  effectiveness: number;
  targetCategory: string;
}

export interface TrainingPhase {
  name: string;
  duration: string;
  focus: string;
  intensity: number;
}

export interface DataPipeline {
  id: string;
  source: string;
  processor: string;
  output: string;
  status: 'active' | 'idle' | 'error';
  lastSync: string;
  recordsProcessed: number;
}

export interface MetricPoint {
  date: string;
  value: number;
  label: string;
}

export type TabType = 'architecture' | 'protocols' | 'coaches' | 'models' | 'analytics';
