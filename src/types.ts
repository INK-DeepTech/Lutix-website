export type PageRoute = 'home' | 'academic-os' | 'pricing' | 'demo';

export type Department = 'all' | 'engineering' | 'revenue' | 'security' | 'product';

export type WorkflowEngine = 'state' | 'router' | 'scheduler';

export type BillingCycle = 'monthly' | 'annual';

export interface LeaderProfile {
  name: string;
  role: string;
  badge: string;
  bio: string;
  focus: string;
  image: string;
}

export interface CapabilityCard {
  id: string;
  dept: Department;
  title: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
  tagColor: 'primary' | 'secondary' | 'error' | 'surface';
}

export interface ConsultationState {
  teamSize: '1-50' | '51-250' | '250+';
  rps: number;
  infrastructure: 'aws' | 'gcp' | 'azure' | 'hybrid';
  compliance: string[];
  selectedDate: number;
  selectedTime: string;
  workEmail: string;
  fullName: string;
  organization: string;
  notes: string;
}
