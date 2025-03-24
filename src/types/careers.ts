export interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}