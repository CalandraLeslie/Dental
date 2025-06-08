import axios from 'axios';

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

export const bookAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error booking appointment:', error);
        throw error;
    }
};

export const sendContactMessage = async (contactData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, contactData);
        return response.data;
    } catch (error) {
        console.error('Error sending contact message:', error);
        throw error;
    }
};