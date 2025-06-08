export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number; // duration in minutes
    imageUrl: string; // URL to an image representing the service
}