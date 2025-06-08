export interface Appointment {
    id: string;
    patientName: string;
    patientEmail: string;
    appointmentDate: Date;
    appointmentTime: string;
    serviceType: string;
    notes?: string;
    status: 'pending' | 'confirmed' | 'canceled';
}