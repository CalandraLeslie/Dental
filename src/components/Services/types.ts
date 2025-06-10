export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  benefits?: string[];
  details?: string[];
}

export interface ServiceCategory {
  id: number;
  name: string;
  services: Service[];
}