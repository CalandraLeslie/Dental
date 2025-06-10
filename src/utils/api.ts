import axios from 'axios';

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  serviceType: string;
  isNewPatient: string;
  message: string;
  preferredDentist: string;
  insurance: string;
  agreement: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchServices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/services`);
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

export const fetchPricing = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pricing`);
        return response.data;
    } catch (error) {
        console.error('Error fetching pricing:', error);
        throw error;
    }
};

export const bookAppointment = async (appointmentData: AppointmentFormData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error booking appointment:', error);
        throw error;
    }
};

export const sendContactMessage = async (contactData: ContactFormData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, contactData);
        return response.data;
    } catch (error) {
        console.error('Error sending contact message:', error);
        throw error;
    }
};

// Update function signatures with proper types
export const submitAppointment = async (appointmentData: AppointmentFormData) => {
  return bookAppointment(appointmentData);
};

export const submitContactForm = async (contactData: ContactFormData) => {
  return sendContactMessage(contactData);
};